import OpenAI from 'openai';
import process from 'process';

const instruction = `Generate a quiz in JSON format with the specified parameters without any introductory text.
1. Parse the user's input to identify the quiz topic, amount of questions, difficulty, and JSON-structure. If the input for example is:
"Topic: anatomy,
Amount of Questions: 5,
Difficulty: Hard,
Type of Quiz: True/False,
JSON-structure
"
This would create a true/false quiz about anatomy with 5 hard questions in the users specified JSON-structure.
2. Create questions that match the selected topic and difficulty level. For 'hard' questions, incorporate esoteric and detailed knowledge about the topic.
3. Very important, ensure and verify the following:
Questions correspond to the difficulty.
The amount of questions is correct.
The correct option is always among the options.
Options are unique, no repeating answers.
Vary the position of the correct answer among the options for each question.
4. Output the quiz in the specified JSON-structure.
`;

const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });

export async function queryGPT(query) {
  try {
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
      top_p: 0.1,
    });

    const validationResult = validateJSON(completion.choices[0].message.content);

    if (!validationResult.isValid) {
      throw new Error(validationResult.error);
    }

    return completion.choices[0].message.content;
  } catch (error) {
    throw error;
  }
}

function validateJSON(jsonString) {
  let parsedJSON;
  try {
    parsedJSON = JSON.parse(jsonString);
  } catch (error) {
    return { isValid: false, error: 'Invalid JSON format' };
  }

  if (!parsedJSON.quiz || !parsedJSON.quiz.title || !Array.isArray(parsedJSON.quiz.questions)) {
    return { isValid: false, error: 'JSON does not match expected structure' };
  }

  for (const question of parsedJSON.quiz.questions) {
    if (
      typeof question.question !== 'string' ||
      !Array.isArray(question.options) ||
      question.options.length < 2 ||
      typeof question.answer !== 'string'
    ) {
      return { isValid: false, error: 'Invalid question format' };
    }
  }

  return { isValid: true };
}
