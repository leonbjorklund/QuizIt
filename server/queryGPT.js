import OpenAI from 'openai';
import process from 'process';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const baseInstruction = `Base Instruction for Quiz-Generator:
1. Parse the user's input to identify the quiz topic, number of questions, difficulty level, and question type. For example, from 'anatomy, 5, hard, true/false', extract 'anatomy' as the topic, '5' as the number of questions, 'hard' as the difficulty, and 'true/false' as the question type.
2. Generate questions based on the specified topic and difficulty level. Ensure the questions match the requested difficulty.
3. Format the quiz in JSON:
   - For a 'true/false' quiz:
     {
       'quiz': {
         'title': 'Title of the quiz',
         'questions': [
           {
             'question': 'Generated question',
             'options': ['True', 'False'],
             'answer': 'True/False (correct answer)'
           },
           // Additional questions follow the same format
         ]
       }
     }
   - For a 'multi-choice' quiz:
     {
       'quiz': {
         'title': 'Title of the quiz',
         'questions': [
           {
             'question': 'Generated question',
             'options': ['option 1', 'option 2', 'option 3', 'option 4'],
             'answer': 'Correct option'
           },
           // Additional questions follow the same format
         ]
       }
     }
4. Ensure the questions are diverse and cover different aspects of the topic, and verify that the answers are correct.
5. Output the completed quiz in the specified JSON format.`;

export async function queryGPT(query) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: baseInstruction,
      },
      { role: 'user', content: query },
    ],
    model: 'gpt-3.5-turbo-1106',
    response_format: { type: 'json_object' },
  });
  return completion.choices[0].message.content;
}
