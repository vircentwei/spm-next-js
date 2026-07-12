// SANPiMA contact API - standalone backend (front/back separated)
// Run: node server.js  (default port 3001)
// Endpoint: POST /api/contact  {email,name,phone,title,content,page,time}
// Submissions are appended to messages.json next to this file.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const STORE = path.join(__dirname, 'messages.json');

function readStore() {
  try { return JSON.parse(fs.readFileSync(STORE, 'utf8')); } catch (e) { return []; }
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method === 'POST' && req.url === '/api/contact') {
    let body = '';
    req.on('data', c => { body += c; if (body.length > 1e6) req.destroy(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (!data.email || !data.name || !data.title || !data.content) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: 'missing required fields' }));
          return;
        }
        const list = readStore();
        list.push({ ...data, receivedAt: new Date().toISOString(), ip: req.socket.remoteAddress });
        fs.writeFileSync(STORE, JSON.stringify(list, null, 2));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'invalid json' }));
      }
    });
    return;
  }

  if (req.method === 'GET' && req.url === '/api/contact') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(readStore()));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ ok: false, error: 'not found' }));
});

server.listen(PORT, () => console.log('Contact API listening on http://localhost:' + PORT));
