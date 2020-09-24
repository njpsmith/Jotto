import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import GiveUp, { UnconnectedGiveUp } from './GiveUp';

test('display Give Up button when more than one guesses has been made but the word has not been guessed correctly', () => {
  // render with guesses made and success false
  // Guesses length > 0
  // Success = false
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
  ];
  const wrapper = shallow(
    <UnconnectedGiveUp guessedWords={guessedWords} success={false} />
  );
  const button = findByTestAttr(wrapper, 'give-up-button');
  expect(button.length).toBe(1);
});

test('dont display Give Up button when only one guess has been made', () => {
  const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
  const wrapper = shallow(
    <UnconnectedGiveUp guessedWords={guessedWords} success={false} />
  );
  const button = findByTestAttr(wrapper, 'give-up-button');
  expect(button.length).toBe(0);
});

describe('Upon click', () => {
  test('hides Give Up button', () => {
    // set guessedWords to empty array (thus hiding the button)
    // Check action creator triggers on click
    const giveUpMock = jest.fn();

    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
    ];
    const wrapper = shallow(
      <UnconnectedGiveUp
        giveUp={giveUpMock}
        guessedWords={guessedWords}
        success={false}
      />
    );
    const button = findByTestAttr(wrapper, 'give-up-button');

    // simulate button click
    button.simulate('click');

    // check mock function fires
    const giveUpMockCallCount = giveUpMock.mock.calls.length;
    expect(giveUpMockCallCount).toBe(1);
  });

  test('Display Show secret word and "better luck next time" message', () => {
    const wrapper = shallow(
      <UnconnectedGiveUp gaveUp={true} guessedWords={[]} />
    );
    const message = findByTestAttr(wrapper, 'better-luck-next-time-message');
    expect(message.length).toBe(1);
  });

  test('Display “new word” button component', () => {
    // Test if action fires to display New Word button
  });
});
