import { SET_CATEGORY } from '../actions/category';

export default function setCategory(state = null, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;
    default:
      return state;
  }
}