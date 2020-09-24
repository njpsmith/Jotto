import { actionTypes } from '../actions';

export default (state = 'inactive', action) => {
  switch (action.type) {
    case actionTypes.CUSTOM_WORD_FORM_ACTIVE_STATUS:
      return 'active';
    case actionTypes.CUSTOM_WORD_FORM_INACTIVE_STATUS:
      return 'inactive';
    case actionTypes.UPDATE_GUESSED_WORD:
      return 'inactive';
    default:
      return state;
  }
};
