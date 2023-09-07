import React, { useState } from 'react';



function TriangelAreaCalculator() {

  const [inputNumber1, setInputNumber] = useState('')
  const [inputNumber2, setInputNumber2] = useState('')
  const [inputNumber3, setInputNumber3] = useState('')
  const [inputNumber4, setInputNumber4] = useState('')

  function handleClick() {
    

  }

  const handleChange = (event) => {
    setInputNumber(event.target.value)
  };

  const handleChange2 = (event) => {
    setInputNumber2(event.target.value)
  };

  const handleChange3 = (event) => {
    setInputNumber3(event.target.value)
  };

  const handleChange4 = (event) => {
    setInputNumber4(event.target.value)
  };

  return (
    <div className='oppgavebox3'>
        <h1 className='op2c1'>Area (oppgave 2 c)</h1>
        <h1 className='op2c2'>rektangel Area Calculator</h1>
        <p>Length:</p>
        <input type="number" value={inputNumber1} onChange={handleChange}/>
        <p>Width: </p>
        <input type="number" value={inputNumber2} onChange={handleChange2}/> <br></br>
        <p>Areal: {inputNumber1 * inputNumber2} </p>
        <h1 className='op2c2'>Triangel Area Calculator</h1>
        <p>Length:</p>
        <input type="number" value={inputNumber3} onChange={handleChange3}/>
        <p>Width: </p>
        <input type="number" value={inputNumber4} onChange={handleChange4}/> <br></br>
        <p>Areal: {inputNumber3 * inputNumber4 / 2} </p>
      </div>
  )
}

export default TriangelAreaCalculator;