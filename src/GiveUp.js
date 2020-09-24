import React from 'react';
import { connect } from 'react-redux';

import { giveUp } from './actions';

export class UnconnectedGiveUp extends React.Component {
  render() {
    return (
      <div>
        {!this.props.success && this.props.guessedWords.length > 1 ? (
          <button
            onClick={this.props.giveUp}
            className="btn btn-danger"
            data-test="give-up-button"
          >
            Give Up
          </button>
        ) : null}

        {this.props.gaveUp ? (
          <div
            data-test="better-luck-next-time-message"
            className="alert alert-danger"
          >
            The secret word was '{this.props.secretWord}'<br />
            Better luck next time!
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success,
    guessedWords: state.guessedWords,
    gaveUp: state.gaveUp,
    secretWord: state.secretWord,
  };
};

export default connect(mapStateToProps, { giveUp })(UnconnectedGiveUp);
