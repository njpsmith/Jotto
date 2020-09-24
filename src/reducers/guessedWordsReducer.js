import { actionTypes } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    case actionTypes.RESET_GAME:
      return [];
    case actionTypes.GIVE_UP:
      return [];
    case actionTypes.UPDATE_GUESSED_WORD:
      return [];
    default:
      return state;
  }
};
