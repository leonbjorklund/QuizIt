import OpenAI from 'openai';
import process from 'process';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const instruction = `Generate a quiz in JSON format with the specified parameters without any introductory text.
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

// export async function queryGPT(query) {
//   try {
//     // Create a thread and send the user's query
//     const thread = await openai.beta.threads.create();
//     await openai.beta.threads.messages.create(thread.id, { role: 'user', content: query });

//     // Run the thread with a specific assistant
//     const run = await openai.beta.threads.runs.create(thread.id, {
//       assistant_id: 'asst_EpDrwTSxxuG9iRtxeQG3xslt',
//     });

//     // Wait for the run to complete
//     let runStatus;
//     do {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
//     } while (runStatus.status === 'running' || runStatus.status === 'in_progress');

//     // Check for non-successful completion
//     if (runStatus.status !== 'completed') {
//       throw new Error(`Run failed with status: ${runStatus.status}`);
//     }

//     // Retrieve the last assistant message from the thread
//     const messages = await openai.beta.threads.messages.list(thread.id);
//     const lastMessage = messages.data
//       .filter((message) => message.run_id === run.id && message.role === 'assistant')
//       .pop();

//     return lastMessage ? lastMessage.content[0]?.text?.value : null;
//   } catch (error) {
//     console.error('Error in queryGPT:', error);
//     return null;
//   }
// }
// queryGPT('create a quiz about sweden');

// queryGPT();
