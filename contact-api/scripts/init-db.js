// Creates the contact_messages table (idempotent). Run: npm run init-db
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const fs = require('fs');
const path = require('path');
const pool = require('../db');

(async () => {
  const sql = fs.readFileSync(path.join(__dirname, '..', 'schema.sql'), 'utf8');
  await pool.query(sql);
  console.log('contact_messages table is ready.');
  await pool.end();
})().catch((err) => {
  console.error('init-db failed:', err.message);
  process.exit(1);
});
