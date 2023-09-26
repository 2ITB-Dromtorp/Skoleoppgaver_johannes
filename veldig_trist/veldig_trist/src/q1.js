
import './App.css';
import React, { useState } from 'react';

function YesNoQuestion() {
  const [answer, setAnswer] = useState(null);

  const handleYesClick = () => {
    setAnswer('Yes');
  };

  const handleNoClick = () => {
    setAnswer('No');
  };

  return (
    <div>
      <h1>spørsmal</h1>
      <p>er Matheo Kant Pangopolous en catboy?</p>
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoClick}>No</button>

      {answer && <p>Your answer is: Yes</p>}
    </div>
  );
  
}





export default YesNoQuestion;