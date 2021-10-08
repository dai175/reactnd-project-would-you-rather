import { getInitialData } from '../utils/api';
import { setCategory, UNANSWERED } from './category';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(setCategory(UNANSWERED));
    return getInitialData().then(({questions, users}) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
}