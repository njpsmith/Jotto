import React from 'react';
import { connect } from 'react-redux';

import { updateGuessedWord } from './actions';

export class UnconnectedCustomSecretWordForm extends React.Component {
  state = {
    customSecretWord: '',
  };

  submitGuessedWord = (event) => {
    event.preventDefault();
    const customSecretWord = this.state.customSecretWord;

    if (customSecretWord && customSecretWord.length > 0) {
      this.props.updateGuessedWord(customSecretWord);
      this.setState({ customSecretWord: '' });
    }
  };

  render() {
    return (
      <div>
        {this.props.customWordFormStatus === 'active' ? (
          <form data-test="form-enter-secret-word" className="form-inline">
            <input
              data-test="input-field"
              className="mb-2 mx-sm-3"
              type="text"
              placeholder="Enter secret word"
              value={
                this.state.customSecretWord ? this.state.customSecretWord : ''
              }
              onChange={(event) =>
                this.setState({ customSecretWord: event.target.value })
              }
            />
            <button
              data-test="submit-button"
              className="btn btn-primary mb-2"
              onClick={(event) => this.submitGuessedWord(event)}
              type="submit"
            >
              Submit Custom Word
            </button>
          </form>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { customWordFormStatus: state.customWordFormStatus };
};

export default connect(mapStateToProps, { updateGuessedWord })(
  UnconnectedCustomSecretWordForm
);
