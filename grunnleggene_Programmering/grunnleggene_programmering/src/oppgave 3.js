import React, { useState } from 'react';



function Land() {

  const [inputNorsk, setInputNorsk] = useState('')
  const [inputSvensk, setInputSvensk] = useState('')

  function handleClick() {
    

  }

  const handleChange = (event) => {
    setInputNorsk(event.target.value)
  };

  const handleChange2 = (event) => {
    setInputSvensk(event.target.value)
  };

  return (
    <div className='oppgavebox4'>
        <h1 className='op31'>oppgave 3</h1>
        <h1 className='op32'>er du Norsk eller Svensk? (skrive N for nosk eller S for svensk)</h1>
        <p>Length:</p>
        <input type="text" value={inputNorsk} onChange={handleChange}/>
        <p>Width: </p>
        <input type="text" value={inputSvensk} onChange={handleChange2}/> <br></br>
        <p>du er: {inputNorsk * inputSvensk} </p>
      </div>
  )
}

export default Land;