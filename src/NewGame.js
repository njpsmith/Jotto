import React from 'react';
import { connect } from 'react-redux';

import { resetGame } from './actions';

export class UnconnectedNewGame extends React.Component {
  render() {
    return (
      <div>
        {this.props.success || this.props.gaveUp ? (
          <button
            onClick={this.props.resetGame}
            data-test="reset-game-button"
            className="btn btn-primary"
            style={{ marginBottom: '25px' }}
          >
            New Word
          </button>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, gaveUp } = state;
  return { success, gaveUp };
};

export default connect(mapStateToProps, { resetGame })(UnconnectedNewGame);
