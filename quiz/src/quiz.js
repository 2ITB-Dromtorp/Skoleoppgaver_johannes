import React, { useState, useEffect } from 'react';
import './App.css';

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60); // Initial countdown time
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/0')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data received from the server
        setQuizData(data.quiz.questions); // Update the state with the correct data
      })
      .catch((error) => console.error('Error fetching quiz data:', error));
  }, []);
  

  useEffect(() => {
    // Start the countdown timer when the component mounts
    if (currentQuestion < quizData.length && !showResult) {
      setTimer(setInterval(updateTimer, 1000));
    }

    // stop timeren når man er ferdig men quizen
    return () => {
      clearInterval(timer);
    };
  }, [currentQuestion, quizData, showResult]);

  const updateTimer = () => {
    // Update the timer display
    setTimeRemaining((prevTime) => {
      if (prevTime === 0) {
        clearInterval(timer);
        alert('Time is up! Quiz failed.'); //melding når tiden er ute
        setShowResult(true);
      }
      return prevTime > 0 ? prevTime - 1 : prevTime;
    });
  };

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setTimeRemaining(60); //hvor mye tid man har
  };

  return (
    <div className="quiz-container">
      {quizData.length === 0 ? (
        <p>Loading quiz...</p>
      ) : showResult ? (
        <div className="result-container">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} out of {quizData.length}</p>
          <button onClick={resetQuiz}>Retry Quiz</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{quizData[currentQuestion].question}</p>
          <ul className="options-container">
            {quizData[currentQuestion].options.map((option, index) => (
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
