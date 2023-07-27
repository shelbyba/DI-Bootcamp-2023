import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 5000;

app.use(cors({ origin: 'http://localhost:3001' }));

app.get('/drug-interaction-proxy', async (req, res) => {
  const { genes } = req.query;

  try {
    const response = await fetch(`https://dgidb.org/api/v2/interactions.json?genes=${genes}`);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error while fetching drug interaction data:', error.message);
    res.status(500).send('An error occurred while fetching drug interaction data.');
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});

