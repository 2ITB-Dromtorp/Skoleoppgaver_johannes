import React, { useState } from 'react';



function Land() {

  const [nationalitet, setNationalitet] = useState('')
  const [svar, setSvar] = useState('')

  function checkNationality() {
    if (nationalitet == 'n') {
      setSvar('norsk')
    }
    if (nationalitet == 's') {
      setSvar('svensk')
    } 
  }


  
  const handleChange = (event) => {
    setNationalitet(event.target.value)
  };


  return (
    <div className='oppgavebox4'>
        <h1 className='op31'>oppgave 3</h1>
        <h1 className='op32'>er du Norsk eller Svensk? (skrive N for nosk eller S for svensk)</h1> <br></br> <br></br>
        <input type="text" value={nationalitet} onChange={handleChange}/> <br></br> <br></br>
        <input type="submit" onClick={checkNationality}/> <br></br>
        <p>Du er: {svar} </p>
      </div>
  )
}

export default Land;