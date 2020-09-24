import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    // initialise the state
    this.state = {
      currentGuess: null,
    };

    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(event) {
    event.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' });
    }
  }

  render() {
    const contents =
      !this.props.success &&
      !this.props.gaveUp &&
      this.props.customWordFormStatus !== 'active' ? (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="Enter guess"
            value={this.state.currentGuess ? this.state.currentGuess : ''}
            onChange={(event) =>
              this.setState({ currentGuess: event.target.value })
            }
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            onClick={(event) => this.submitGuessedWord(event)}
            type="submit"
          >
            Submit
          </button>
        </form>
      ) : null;
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success,
    gaveUp: state.gaveUp,
    customWordFormStatus: state.customWordFormStatus,
  };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
