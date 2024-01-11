import OpenAI from 'openai';
import process from 'process';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function queryGPT(query) {
  console.log('query', query);
  const quizGeneratorAssistant = await openai.beta.assistants.retrieve('asst_eMr578TIXh5ZDuDQ0XiU1ciG');

  const thread = await openai.beta.threads.create();

  await openai.beta.threads.messages.create(thread.id, {
    role: 'user',
    content: query,
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: quizGeneratorAssistant.id,
  });

  let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

  while (runStatus.status !== 'completed') {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

    if (['failed', 'cancelled', 'expired'].includes(runStatus.status)) {
      console.log(`Run failed with status: ${runStatus.status}`);
      break;
    }
  }

  const messages = await openai.beta.threads.messages.list(thread.id);

  const lastMessageForRun = messages.data
    .filter((message) => message.run_id === run.id && message.role === 'assistant')
    .pop();

  if (lastMessageForRun && lastMessageForRun.content && lastMessageForRun.content.length > 0) {
    const messageContent = lastMessageForRun.content[0];

    if (messageContent.type === 'text' && messageContent.text && messageContent.text.value) {
      const jsonString = messageContent.text.value;

      try {
        // Parse the JSON string to get the quiz object
        const quizObject = jsonString;
        return quizObject; // Returning the parsed object
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return null; // You can decide how to handle the error
      }
    }
  }

  // Return null or handle as needed if the correct content is not found
  return null;
}

// export async function queryGPT(query) {

//   const quizGeneratorAssistant = await openai.beta.assistants.retrieve(
//     "asst_eMr578TIXh5ZDuDQ0XiU1ciG"
//   );
//   const completion = await openai.chat.completions.create({
//     messages: [
//       { role: 'user', content: query },
//     ],
//     model: 'gpt-3.5-turbo-1106',
//     response_format: { type: 'json_object' },
//   });

//   return completion.choices[0].message.content;
// }
