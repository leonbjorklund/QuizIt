/* eslint-disable @typescript-eslint/no-floating-promises */
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: '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' });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant designed to output JSON.',
      },
      { role: 'user', content: 'Who won the world series in 2020?' },
    ],
    model: 'gpt-3.5-turbo-1106',
    response_format: { type: 'json_object' },
  });
  console.log(completion);
  console.log(completion.choices);
  console.log(completion.choices[0].message.content);
}
