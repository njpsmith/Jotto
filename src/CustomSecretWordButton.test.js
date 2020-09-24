import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import { UnconnectedCustomSecretWordButton } from './CustomSecretWordButton';

const setup = (props = {}) => {
  return shallow(<UnconnectedCustomSecretWordButton {...props} />);
};

// customWordFormStatus state has the options of 'inactive', 'active'

describe('CustomSecretWordButton', () => {
  test('renders', () => {
    const wrapper = setup({ customWordFormStatus: 'inactive' });
    const button = findByTestAttr(wrapper, 'button-enter-secret-word');
    expect(button.length).toBe(1);
  });

  describe('`Enter your own secret word` button is clicked', () => {
    test('first `customWordFormActiveStatus` action creator (which hides the button and shows the form)', () => {
      const customWordFormActiveStatusMock = jest.fn();

      // pass the mock as a prop
      const wrapper = setup({
        customWordFormStatus: 'inactive',
        customWordFormActiveStatus: customWordFormActiveStatusMock,
      });

      const button = findByTestAttr(wrapper, 'button-enter-secret-word');
      button.simulate('click');

      const callCount = customWordFormActiveStatusMock.mock.calls.length;
      expect(callCount).toBe(1);
    });
  });
});
