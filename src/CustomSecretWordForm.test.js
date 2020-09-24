import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import { UnconnectedCustomSecretWordForm } from './CustomSecretWordForm';

const setup = (props = { customWordFormStatus: 'active' }) => {
  return shallow(<UnconnectedCustomSecretWordForm {...props} />);
};

test('renders', () => {
  const wrapper = setup();
  const form = findByTestAttr(wrapper, 'form-enter-secret-word');
  expect(form.length).toBe(1);
});

test('does not render if `customWordFormStatus` state is not active', () => {
  const wrapper = setup({ customWordFormStatus: 'inactive' });
  const form = findByTestAttr(wrapper, 'form-enter-secret-word');
  expect(form.length).toBe(0);
});

test('`customSecretWord` state is empty string by default', () => {
  const wrapper = setup();
  expect(wrapper.state('customSecretWord')).toBe('');
});

describe('after form submission', () => {
  let wrapper;
  let newWord = 'tango';
  let updateGuessedWordMock;

  beforeEach(() => {
    updateGuessedWordMock = jest.fn();

    wrapper = setup({
      customWordFormStatus: 'active',
      updateGuessedWord: updateGuessedWordMock,
    });
    wrapper.setState({ customSecretWord: newWord });

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  });

  test('`updateGuessedWord` was called once', () => {
    const updateGuessedWordMockCallCount =
      updateGuessedWordMock.mock.calls.length;
    expect(updateGuessedWordMockCallCount).toBe(1);
  });

  test('calls `updateGuessedWord` with correct input field value', () => {
    const updateGuessedWordArgumment = updateGuessedWordMock.mock.calls[0][0];
    expect(updateGuessedWordArgumment).toBe(newWord);
  });

  test('text is removed from input field', () => {
    expect(wrapper.state('customSecretWord')).toBe('');
  });

  // test('resets game (including guess count and guessedWords list)', () => {});

  // test('the game should use the user’s secret word, not a word from the server', () => {});

  // test('the form is removed', () => {});
});
