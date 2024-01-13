import { QuizInputType } from '../utils/types';

const multiChoiceJSON = `{
  'question': 'Generated question',
  'options': ['option 1', 'option 2', 'option 3', 'option 4'],
  'answer': 'Correct option'
}`;

// Adjusted to specifically include 'True' and 'False' as the options
const trueFalseJSON = `{
  'question': 'Generated question',
  'options': ['True', 'False'],
  'answer': 'True or False (select the correct answer)'
}`;

export const generatePrompt = (quizInput: QuizInputType): string => {
  const { topic, questionAmount, difficulty, type } = quizInput;

  let questionsJSON: string;
  if (type === 'Multichoice') {
    questionsJSON = multiChoiceJSON;
  } else if (type === 'True/False') {
    questionsJSON = trueFalseJSON;
  } else {
    throw new Error('Invalid quiz type');
  }

  return `Topic: ${topic}, AmountOfQuestions: ${questionAmount}, Difficulty: ${difficulty}, ${type}, JSON-structure: { 'quiz': { 'title': '${topic} Quiz', 'questions': [${questionsJSON} // Additional questions follow the same format ] } }`;
};
