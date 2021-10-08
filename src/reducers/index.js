import { combineReducers } from 'redux';
import authedUser from './authedUser';
import category from './category';
import loading from './loading';
import questions from './questions';
import users from './users';

export default combineReducers({
  authedUser,
  category,
  users,
  questions,
  loading,
});