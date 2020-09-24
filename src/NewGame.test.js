import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import { UnconnectedNewGame } from './NewGame';

const setup = (props = {}) => {
  const defaultProps = {
    success: false,
  };

  const setupProps = { ...defaultProps, ...props };

  // create a shallow wrapper of the unconnected component and pass that mocked function as a prop
  return shallow(<UnconnectedNewGame {...setupProps} />);
};

test('`New Word` button does not display if successful guess has not been made', () => {
  const wrapper = setup();
  const newWordButton = findByTestAttr(wrapper, 'reset-game-button');
  expect(newWordButton.length).toBe(0);
});

test('`New Word` button displays if successful guess is made', () => {
  const wrapper = setup({ success: true });
  const newWordButton = findByTestAttr(wrapper, 'reset-game-button');
  expect(newWordButton.length).toBe(1);
});

test('`New Word` button displays if user has given up', () => {
  const wrapper = setup({ gaveUp: true });
  const newWordButton = findByTestAttr(wrapper, 'reset-game-button');
  expect(newWordButton.length).toBe(1);
});

describe('clicking `New Word` button', () => {
  test('fires resetGame action creator', () => {
    const resetGameMock = jest.fn();

    // pass the Mock as a prop resetGame
    const wrapper = setup({ success: true, resetGame: resetGameMock });

    // simluate click
    const newWordButton = findByTestAttr(wrapper, 'reset-game-button');
    newWordButton.simulate('click');

    // check mock function fires
    const resetGameMockCallCount = resetGameMock.mock.calls.length;
    expect(resetGameMockCallCount).toBe(1);
  });

  // test('gets new word from server', () => {
  //   // check state
  // });
});
