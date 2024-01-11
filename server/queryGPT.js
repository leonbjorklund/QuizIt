import OpenAI from 'openai';
import process from 'process';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function queryGPT(query) {
  try {
    // Create a thread and send the user's query
    const thread = await openai.beta.threads.create();
    await openai.beta.threads.messages.create(thread.id, { role: 'user', content: query });

    // Run the thread with a specific assistant
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: 'asst_eMr578TIXh5ZDuDQ0XiU1ciG',
    });

    // Wait for the run to complete
    let runStatus;
    do {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    } while (runStatus.status === 'running' || runStatus.status === 'in_progress');

    // Check for non-successful completion
    if (runStatus.status !== 'completed') {
      throw new Error(`Run failed with status: ${runStatus.status}`);
    }

    // Retrieve the last assistant message from the thread
    const messages = await openai.beta.threads.messages.list(thread.id);
    const lastMessage = messages.data
      .filter((message) => message.run_id === run.id && message.role === 'assistant')
      .pop();

    return lastMessage ? lastMessage.content[0]?.text?.value : null;
  } catch (error) {
    console.error('Error in queryGPT:', error);
    return null;
  }
}
