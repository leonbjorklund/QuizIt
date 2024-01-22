import express, { Router } from 'express';
import serverless from 'serverless-http';
import { queryGPT } from './lib/queryGPT';

const api = express();
api.use(express.json());

const router = Router();

router.post('/sendToGPT', async (req, res) => {
  try {
    const query = req.body.query;
    const gptResponse = await queryGPT(query);
    return res.status(200).send(gptResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

api.use('/api/', router);

export const handler = serverless(api);
