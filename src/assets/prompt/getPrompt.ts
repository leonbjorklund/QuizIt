export const GetPrompt = (input: string, quizType: string, questionsAmount: string, difficulty: string) => {
  switch (quizType) {
    case 'True/False': {
      return `Generate a quiz containing ${questionsAmount} statements that are either true or false. The distribution between true and false statements should be random. Craft statements that are concise and clear, using the provided text: '${input}'. The difficulty of the statements and the correlating answers should be ${difficulty} relative to an average person. The quiz statements should be created through generation. Provide the results in JSON format, including the statement text and its truth value. The JSON response should have the same structure the following example: 
          {
            "data": [
              {
                "statement": "This is a statement.",
                "isTrue": true
              },
              {
                "statement": "Another statement here.",
                "isTrue": false
              },
              ...
            ]
          }`;
    }
    case 'Multichoice': {
      return `Generate a quiz containing ${questionsAmount} questions from '${input}':
            - 4 choices per question.
            - Only one out of the four choices are correct; others plausible but incorrect.
            - Option length: ≤ 8 words
            - Questions and answers must be clear.
            - Vary the position of the correct answer.
            - Provide the results in JSON format
            The difficulty of the questions and the correlating answers should be ${difficulty} relative to an average person.
            The JSON response should have the same structure the following example:
            {
              "data": [
                {
                  "question": "Generated question based on the text",
                  "choices": [
                    {
                      "option": "Answer (strictly 8 words or less) from the text.",
                      "isTrue": false
                    },
                    {
                      "option": "Answer (strictly 8 words or less) from the text.",
                      "isTrue": false
                    },
                    {
                      "option": "Answer (strictly 8 words or less) from the text.",
                      "isTrue": true
                    },
                    {
                      "option": "Answer (strictly 8 words or less) from the text.",
                      "isTrue": false
                    },
                  ],
                },
                ...
              ]
            }`;
    }
    default:
      throw new Error(`Unsupported quiz type: ${quizType}`);
  }
};
