import express, { Router } from 'express';
import serverless from 'serverless-http';
import { queryGPT } from './lib/queryGPT';

const api = express();
api.use(express.json());

const router = Router();

router.post('/sendToGPT', async (req, res) => {
  try {
    // Assuming the query is sent in the request body
    const query = req.body.query;

    // Call the GPTQuery function and wait for its response
    const gptResponse = await queryGPT(query);

    // Send the GPT-3 response back to the client
    return res.status(200).send(gptResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

api.use('/api/', router);

export const handler = serverless(api);
