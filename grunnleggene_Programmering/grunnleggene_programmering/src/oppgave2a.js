
import React, { useState } from 'react';

function RektangelAreaCalculator() {

  const [inputNumber1, setInputNumber] = useState(8)
  const [inputNumber2, setInputNumber2] = useState(8)

  function handleClick() {
    

    //SsetArea(8);
  }




  return (
    <div className='oppgavebox2'>
        <h1 className='op2h1'>rektangel Area Calculator (oppgave 2 a)</h1>
        <p>Length:</p>
        <input type="number" value={inputNumber1}/>
        <p>Width: </p>
        <input type="number" value={inputNumber2}/> <br></br>
        <p>Areal: {inputNumber1 * inputNumber2} </p>
      </div>
  )
}

export default RektangelAreaCalculator;
  