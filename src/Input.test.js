import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput } from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  // Testing a connected component
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('renders the component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test('renders the component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('redux props', () => {
  test('has `success` piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success: success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord` action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';
  beforeEach(() => {
    // pass the Mock as a prop guessWord
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
    };

    // create a shallow wrapper of the unconnected component and pass that mocked function as a prop
    wrapper = shallow(<UnconnectedInput {...props} />);

    // add value to input box
    wrapper.setState({ currentGuess: guessedWord });

    // simulate a click on the submit button, using findByTestAttr and Enzyme simulate()
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  });

  test('`guessWord` was called once', () => {
    const guessWordMockCallCount = guessWordMock.mock.calls.length;
    expect(guessWordMockCallCount).toBe(1);
  });

  test('calls `guessWord` with correct input field value', () => {
    const guessWordArgumment = guessWordMock.mock.calls[0][0];
    expect(guessWordArgumment).toBe(guessedWord);
  });

  test('input box clears on submit', () => {
    expect(wrapper.state('currentGuess')).toBe('');
  });
});
