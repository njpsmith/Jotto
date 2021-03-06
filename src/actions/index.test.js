import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';

// Commented out because API is currently inactive. Using an array of words instead
// describe('getSecretWord action creator', () => {
//   beforeEach(() => {
//     //Calls moxios install. Send requests to moxios instead of axios
//     moxios.install();
//   });
//   afterEach(() => {
//     moxios.uninstall();
//   });

//   test('adds response word to state', () => {
//     const secretWord = 'party';
//     const store = storeFactory();

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: secretWord,
//       });
//     });

//     return store.dispatch(getSecretWord()).then(() => {
//       const newState = store.getState();
//       expect(newState.secretWord).toBe(secretWord);
//     });
//   });
// });
