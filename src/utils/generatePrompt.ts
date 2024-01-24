import { QuizInputType } from './types';

const multiChoiceJSON = `
  {
    'question': 'Generated question',
    'options': ['option 1', 'option 2', 'option 3', 'option 4'],
    'answer': 'Correct option'
  }
`;

const trueFalseJSON = `
  {
    'question': 'True or false statement',
    'options': ['True', 'False'],
    'answer': 'True or False (select the correct answer)'
  }
`;

export const generatePrompt = (quizInput: QuizInputType): string => {
  const { topic, questionAmount, difficulty, type } = quizInput;

  const questionsJSON = type === 'Multichoice' ? multiChoiceJSON : trueFalseJSON;

  return `Topic: ${topic}, Amount of Questions: ${questionAmount}, Difficulty: ${difficulty}, Type of Quiz: ${type}, JSON-structure: { 'quiz': { 'title': '${topic} Quiz', 'questions': [${questionsJSON} // Additional questions follow the same format ] } }`;
};
