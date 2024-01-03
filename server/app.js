import 'dotenv/config';
import express from 'express';

import process from 'process';
import { queryGPT } from './queryGPT.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;
// app.use(express.static(path.join(__dirname, '../client/build'))); for production

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.post('/test', async (req, res) => {
  try {
    // Assuming the query is sent in the request body
    const query = req.body.query;

    // Call the GPTQuery function and wait for its response
    const gptResponse = await queryGPT(query);

    // Send the GPT-3 response back to the client
    return res.status(200).json(gptResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/hej', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
