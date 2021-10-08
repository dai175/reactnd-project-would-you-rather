export const SET_CATEGORY = 'SET_CATEGORY';
export const UNANSWERED = 'UNANSWERED';
export const ANSWERED = 'ANSWERED';

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category
  };
}