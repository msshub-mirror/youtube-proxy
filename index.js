const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/check_youtube', async (req, res) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet',
        id: 'dQw4w9WgXcQ', // 任意の動画ID
        key: 'YOUR_YOUTUBE_API_KEY' // ← YouTube APIキーをここに！
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from YouTube' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
