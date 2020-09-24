import { actionTypes } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    case actionTypes.UPDATE_GUESSED_WORD:
      return action.payload;
    default:
      return state;
  }
};
