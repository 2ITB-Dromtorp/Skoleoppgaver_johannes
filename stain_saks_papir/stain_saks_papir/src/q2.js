
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
      <p>Dachshund?</p>
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoClick}>No</button>

      {answer && <p>Your answer is: {answer} (veldig trist)</p>}
    </div>
  );
  
}





export default YesNoQuestion;