import { storeFactory } from '../test/testUtils';
import { guessWord, giveUp } from './actions';

// Unit testing, because we're testing the reducer and the action creator
describe('giveUp action dispatcher', () => {
  const gaveUp = false;

  let store;
  const initialState = { gaveUp };
  beforeEach(() => {
    store = storeFactory(initialState);
  });

  test('user gave up', () => {
    store.dispatch(giveUp());
    const newState = store.getState();
    const expectedState = {
      ...initialState,
      customWordFormStatus: 'inactive',
      gaveUp: true,
      guessedWords: [],
      secretWord: null,
      success: false,
    };
    expect(newState).toEqual(expectedState);
  });
});

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        customWordFormStatus: 'inactive',
        gaveUp: false,
        success: false,
        guessedWords: [{ guessedWord: unsuccessfulGuess, letterMatchCount: 3 }],
      };
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        customWordFormStatus: 'inactive',
        gaveUp: false,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        customWordFormStatus: 'inactive',
        gaveUp: false,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        customWordFormStatus: 'inactive',
        gaveUp: false,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
