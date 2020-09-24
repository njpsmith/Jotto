import React from 'react';
import { connect } from 'react-redux';

import { customWordFormActiveStatus } from './actions';

export class UnconnectedCustomSecretWordButton extends React.Component {
  render() {
    return (
      <div>
        {this.props.customWordFormStatus === 'inactive' ? (
          <button
            className="btn btn-info"
            style={{ marginTop: '5px' }}
            data-test="button-enter-secret-word"
            onClick={this.props.customWordFormActiveStatus}
          >
            Enter your own secret word
          </button>
        ) : null}
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return { customWordFormStatus: state.customWordFormStatus };
};

const mapDispatchToProps = {
  customWordFormActiveStatus: customWordFormActiveStatus,
};

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(UnconnectedCustomSecretWordButton);
