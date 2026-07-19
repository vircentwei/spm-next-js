// SANPiMA contact API - Express + MySQL (front/back separated)
// Run: npm install && npm run init-db && npm start
require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = Number(process.env.PORT || 3001);

const origins = (process.env.CORS_ORIGINS || '*').trim();
app.use(cors(origins === '*' ? {} : { origin: origins.split(',').map((s) => s.trim()) }));
app.use(express.json({ limit: '100kb' }));

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true, db: true });
  } catch (e) {
    res.status(500).json({ ok: false, db: false, error: e.message });
  }
});

app.post('/api/contact', async (req, res) => {
  const { email, name, phone, title, content, page, time } = req.body || {};
  if (!email || !EMAIL_RE.test(String(email))) {
    return res.status(400).json({ ok: false, error: 'invalid email' });
  }
  if (!name || !title || !content) {
    return res.status(400).json({ ok: false, error: 'missing required fields' });
  }
  try {
    const [result] = await pool.execute(
      `INSERT INTO contact_messages (email, name, phone, title, content, page, client_time, ip, user_agent)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        String(email).slice(0, 255),
        String(name).slice(0, 100),
        phone ? String(phone).slice(0, 50) : null,
        String(title).slice(0, 255),
        String(content).slice(0, 60000),
        page ? String(page).slice(0, 500) : null,
        time ? String(time).slice(0, 50) : null,
        (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim().slice(0, 45),
        (req.headers['user-agent'] || '').slice(0, 500),
      ]
    );
    res.json({ ok: true, id: result.insertId });
  } catch (e) {
    console.error('insert failed:', e.message);
    res.status(500).json({ ok: false, error: 'database error' });
  }
});

app.get('/api/contact', async (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 50, 200);
  try {
    const [rows] = await pool.query(
      'SELECT id, email, name, phone, title, content, page, client_time, ip, created_at FROM contact_messages ORDER BY id DESC LIMIT ?',
      [limit]
    );
    res.json({ ok: true, total: rows.length, data: rows });
  } catch (e) {
    res.status(500).json({ ok: false, error: 'database error' });
  }
});

app.use((req, res) => res.status(404).json({ ok: false, error: 'not found' }));

app.listen(PORT, () => console.log(`Contact API listening on http://localhost:${PORT}`));
