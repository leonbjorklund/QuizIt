import OpenAI from 'openai';
import process from 'process';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function queryGPT(query) {
  console.log('query', query);
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant designed to output quizzes in JSON format.',
      },
      { role: 'user', content: query },
    ],
    model: 'gpt-3.5-turbo-1106',
    response_format: { type: 'json_object' },
  });
  console.log('query', query);
  console.log('completion', completion);
  console.log(completion.choices[0].message);
  return completion.choices[0].message.content;
}
