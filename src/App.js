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

        <hr />
        <div>
          This app has the following functionality:
          <ul>
            <li>
              On load, the app generates a five-letter secret word, which the
              user has to guess (ordinarily this word would be hidden from the
              user, but to demonstrate the game's functionality it is visible!)
            </li>
            <li>
              Unsuccessful guesses are logged in a list. The player is told how
              many letters of their guess match the secret word.
            </li>
            <li>
              After two unsuccessful guesses, the player is given the option of
              giving up. Doing so reveals the secret word and lets them generate
              a new secret word to play again.
            </li>
            <li>
              If the player guesses the correct word, they are congratulated and
              the 'New Word' button is again displayed.
            </li>
            <li>
              The user can also enter their own secret word, for a second player
              to guess.
            </li>
          </ul>
          This app was built by{' '}
          <a
            href="https://www.linkedin.com/in/nicholas-smith-97a90829/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Nicholas Smith
          </a>
          , using Test Driven Development (TDD). It uses React.js, Redux, Jest
          and Enzyme. Find Nicholas on LinkedIn{' '}
          <a
            href="https://www.linkedin.com/in/nicholas-smith-97a90829/"
            rel="noopener noreferrer"
            target="_blank"
          >
            here
          </a>
          . You can find the app's source files{' '}
          <a
            href="https://github.com/njpsmith/Jotto"
            rel="noopener noreferrer"
            target="_blank"
          >
            here
          </a>
          .
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord, customWordFormStatus } = state;
  return { success, guessedWords, secretWord, customWordFormStatus };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
