import React, { useState, useEffect } from 'react';
import './App.css';

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60); // Initial countdown time
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/0')
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data);
        // Initialize timer only when quiz data is received
        if (data && data.options) {
          setTimer(setInterval(updateTimer, 1000));
        }
      })
      .catch((error) => console.error('Error fetching quiz data:', error));
  }, []);

  useEffect(() => {
    // Check for end of quiz
    if (currentQuestion ===  - 1 && !showResult) {
      setShowResult(true);
      clearInterval(timer);
    }
  }, [currentQuestion, quizData, showResult, timer]);

  const updateTimer = () => {
    setTimeRemaining((prevTime) => {
      if (prevTime === 0) {
        clearInterval(timer);
        alert('Time is up! Quiz failed.');
        setShowResult(true);
      }
      return prevTime > 0 ? prevTime - 1 : prevTime;
    });
  };

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData.correct_answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.options.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      clearInterval(timer);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setTimeRemaining(60);
    // Restart timer when resetting quiz
    setTimer(setInterval(updateTimer, 1000));
  };

  return (
    <div className="quiz-container">
      {quizData === null ? (
        <p>Loading quiz...</p>
      ) : showResult ? (
        <div className="result-container">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} out of {quizData.options.length}</p>
          <button onClick={resetQuiz}>Retry Quiz</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{quizData.question}</p>
          <ul className="options-container">
            {quizData.options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
