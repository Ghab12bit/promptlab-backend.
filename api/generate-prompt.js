// api/generate-prompt.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const body = req.body || {};
  const query = (body.query || '').trim();

  if (!query || query.length < 6) {
    return res.status(400).json({ error: 'Query must be at least 6 characters.' });
  }

  const variants = [
    { label: "Short", prompt: `Write a short prompt for: "${query}".` },
    { label: "Structured", prompt: `System: You are an expert assistant. User: Generate a detailed prompt for: "${query}".` },
    { label: "Advanced", prompt: `You are a professional prompt engineer. Create a refined, multi-part prompt for "${query}" including role, task, and output style.` }
  ];

  return res.status(200).json({ variants });
}


