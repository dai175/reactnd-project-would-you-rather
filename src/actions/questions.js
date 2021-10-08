import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { handleInitialData } from './shared';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function handleQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => {
        dispatch(handleInitialData());
      });
  };
}

export function handleQuestion(question) {
  console.log(question);
  return (dispatch) => {
    return saveQuestion(question)
      .then(() => {
        dispatch(handleInitialData());
      });
  };
}