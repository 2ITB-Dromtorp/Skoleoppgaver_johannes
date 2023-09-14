import React, { Component } from 'react';
import './App.css';

class GuessingGame extends Component {
  constructor() {
    super();
    this.state = {
      targetNumber: Math.floor(Math.random() * 100) + 1, // Generates a random number between 1 and 100
      guess: '',
      attempts: 0,
      message: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ guess: event.target.value });
  };

  handleGuess = () => {
    const { targetNumber, guess, attempts } = this.state;
    const guessNumber = parseInt(guess, 10);

    if (isNaN(guessNumber)) {
      this.setState({ message: 'Please enter a valid number.' });
    } else {
      this.setState({ attempts: attempts + 1 });

      if (guessNumber === targetNumber) {
        this.setState({ message: `Congratulations! You guessed the number ${targetNumber} in ${attempts + 1} attempts.` });
      } else if (guessNumber < targetNumber) {
        this.setState({ message: 'Too low. Try again.' });
      } else {
        this.setState({ message: 'Too high. Try again.' });
      }
    }
  };

  render() {
    const { guess, attempts, message } = this.state;

    return (
      <div>
        <h1 className='oppgave5'>Oppgave 5</h1>
        <div className='oppgavebox6'>
        <p>Guess a number between 1 and 100:</p>
        <input type="number" value={guess} onChange={this.handleInputChange} /> <br></br>
        <button onClick={this.handleGuess}>Guess</button>
        <p>Attempts: {attempts}</p>
        <p>{message}</p>
        </div>
      </div>
    );
  }
}

export default GuessingGame;