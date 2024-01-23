import 'dotenv/config';
import express from 'express';
import process from 'process';
import { queryGPT } from './queryGPT.js';

const app = express();
app.use(express.json());

app.post('/sendToGPT', async (req, res) => {
  try {
    const query = req.body.query;
    const gptResponse = await queryGPT(query);
    return res.status(200).send(gptResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
