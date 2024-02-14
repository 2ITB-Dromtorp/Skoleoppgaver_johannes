import React, { useState, useEffect } from 'react';
import './App.css';

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(60); // Initial timer value in seconds

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/${currentQuestion}`);
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, [currentQuestion]);

  useEffect(() => {
    if (quizData && quizData.options) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(intervalId);
            alert('Time is up! Quiz failed.');
            setShowResult(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [quizData]);

  useEffect(() => {
    // Check for end of quiz
    if (currentQuestion === quizData?.options.length && !showResult) {
      setShowResult(true);
    }
  }, [currentQuestion, quizData, showResult]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData.correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < quizData.options.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setTimer(60);
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

          {/* Display the timer */}
          <p>Time Remaining: {timer} seconds</p>

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
