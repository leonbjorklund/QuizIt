import OpenAI from 'openai';
import process from 'process';

const instruction = `Generate a quiz in JSON format with the specified parameters without any introductory text.
1. Parse the user's input to identify the quiz topic, number of questions, difficulty level, and JSON-structure. If the input for example is:
"Topic: anatomy,
AmountOfQuestions: 5,
Difficulty: hard,
Type: True/False,
JSON-structure
"
This would create a true/false quiz about anatomy with 5 hard questions in the users specified JSON-structure.
2. Create questions that match the selected topic and difficulty level. For 'hard' questions, incorporate esoteric and detailed knowledge about the topic.
3. Ensure the questions correspond to the difficulty, and make sure questions are diverse and cover different aspects of the topic. Randomize the position of the correct answer among the options for each question to ensure a fair distribution and prevent predictability.
4. Output the completed quiz in the specified JSON format.`;

export async function queryGPT(query) {
  const apiKey = process.env.OPENAI_API_KEY;
  const openai = new OpenAI({ apiKey });
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: instruction,
      },
      { role: 'user', content: query },
    ],
    model: 'gpt-3.5-turbo-1106',
    response_format: { type: 'json_object' },
  });

  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
}
