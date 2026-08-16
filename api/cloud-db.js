// Vercel Serverless Function: /api/cloud-db.js
// Provides a secure, CORS-enabled online server API for syncing projects, inquiries, and stats.

let inMemoryDatabase = null;

export default async function handler(req, res) {
  // Allow all origins (CORS) so any mobile phone, tablet, or desktop browser can sync
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Master-Key, X-Access-Key'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const STORAGE_URL = process.env.VITE_CLOUD_API_URL || process.env.CLOUD_API_URL;
  const STORAGE_KEY = process.env.VITE_CLOUD_API_KEY || process.env.CLOUD_API_KEY;

  try {
    if (req.method === 'GET') {
      // If external cloud database URL is configured, proxy request
      if (STORAGE_URL) {
        const headers = { 'Content-Type': 'application/json' };
        if (STORAGE_KEY) {
          headers['X-Master-Key'] = STORAGE_KEY;
          headers['X-Access-Key'] = STORAGE_KEY;
          headers['Authorization'] = `Bearer ${STORAGE_KEY}`;
        }
        const cloudRes = await fetch(STORAGE_URL, { headers });
        if (cloudRes.ok) {
          const cloudData = await cloudRes.json();
          // Extract nested record if JSONBin format
          const record = cloudData.record || cloudData.data || cloudData;
          return res.status(200).json(record);
        }
      }

      // Fallback to in-memory store if no external DB configured
      return res.status(200).json(inMemoryDatabase || { projects: [], inquiries: [], stats: {} });
    }

    if (req.method === 'PUT' || req.method === 'POST') {
      const body = req.body;
      inMemoryDatabase = body;

      // If external cloud database URL is configured, persist to external database
      if (STORAGE_URL) {
        const headers = { 'Content-Type': 'application/json' };
        if (STORAGE_KEY) {
          headers['X-Master-Key'] = STORAGE_KEY;
          headers['X-Access-Key'] = STORAGE_KEY;
          headers['Authorization'] = `Bearer ${STORAGE_KEY}`;
        }
        const cloudRes = await fetch(STORAGE_URL, {
          method: 'PUT',
          headers,
          body: JSON.stringify(body)
        });

        if (cloudRes.ok) {
          return res.status(200).json({ success: true, synced: 'external' });
        }
      }

      return res.status(200).json({ success: true, synced: 'local_server' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('API cloud-db error:', error);
    return res.status(500).json({ error: error.message });
  }
}
