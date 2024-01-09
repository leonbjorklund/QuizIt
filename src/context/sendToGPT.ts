import { GetPrompt, OptionsData } from '../assets';
import { QuizInputType, customQuizReqType } from '../utils/types';

export const defaultQuizRequest = {
  type: OptionsData.options[0].alternatives[1],
  amount: OptionsData.options[1].alternatives[1],
  difficulty: OptionsData.options[2].alternatives[1],
};

export const generatePrompt = (quizInput: QuizInputType, customQuizReq: customQuizReqType) => {
  return GetPrompt(quizInput.value, customQuizReq.type, customQuizReq.amount, customQuizReq.difficulty);
};
