import OpenAI from 'openai';
import process from 'process';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function queryGPT(query) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: query },
    ],
    model: 'asst_eMr578TIXh5ZDuDQ0XiU1ciG', // Your specific assistant ID
    response_format: { type: 'json_object' },
  });
  return completion.choices[0].message.content;
}

