import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import NewGame from './NewGame';
import Input from './Input';
import { getSecretWord } from './actions';
import GiveUp from './GiveUp';
import CustomSecretWordButton from './CustomSecretWordButton';
import CustomSecretWordForm from './CustomSecretWordForm';

export class UnconnectedApp extends Component {
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <CustomSecretWordForm />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <br />
        <GiveUp />
        <NewGame />
        <br />
        <div>
          {this.props.customWordFormStatus === 'inactive' && (
            <span>
              (For testing purposes, the secret word is {this.props.secretWord})
            </span>
          )}
        </div>
        <hr />
        <CustomSecretWordButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord, customWordFormStatus } = state;
  return { success, guessedWords, secretWord, customWordFormStatus };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
