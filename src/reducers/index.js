import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import gaveUp from './gaveUpReducer';
import customWordFormStatus from './customWordFormStatusReducer';

export default combineReducers({
  success: success,
  guessedWords: guessedWords,
  secretWord: secretWord,
  gaveUp: gaveUp,
  customWordFormStatus: customWordFormStatus,
});
