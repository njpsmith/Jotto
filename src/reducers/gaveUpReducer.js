import { actionTypes } from '../actions';

export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.GIVE_UP:
      return true;
    case actionTypes.GUESS_WORD:
      return false;
    case actionTypes.RESET_GAME:
      return false;
    default:
      return state;
  }
};
