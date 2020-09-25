import { actionTypes } from '../actions';

export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    case actionTypes.RESET_GAME:
      return false;
    case actionTypes.UPDATE_GUESSED_WORD:
      return false;
    default:
      return state;
  }
};
