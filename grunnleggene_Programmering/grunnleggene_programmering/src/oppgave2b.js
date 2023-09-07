import React, { useState } from 'react';

/*
class TriangelAreaCalculator extends Component {
  constructor() {
    super();
    this.state = {
      length: 8,
      width: 8,
      Two: 2,
      area: null,
    };
  }

  calculateArea = () => {
    const { length, width, two } = this.state;
    const area = length * width / two;
    this.setState({ area });
  };

  render() {
    return (
      <div>
        <h1>Triangel Area Calculator</h1>
        <p>Length: {this.state.length}</p>
        <p>Width: {this.state.width}</p>
        <p>Area: {this.state.area === null ? 'Calculate area' : this.state.area}</p>
        <button onClick={this.calculateArea}>Calculate Area</button>
      </div>
    );
  }
}
*/

function TriangelAreaCalculator() {

  const [inputNumber1, setInputNumber] = useState('')
  const [inputNumber2, setInputNumber2] = useState('')

  function handleClick() {
    

    //SsetArea(8);
  }

  const handleChange = (event) => {
    setInputNumber(event.target.value)
  };

  const handleChange2 = (event) => {
    setInputNumber2(event.target.value)
  };

  return (
    <div className='oppgavebox2'>
        <h1 className='op2h1'>Triangel Area Calculator (oppgave 2 b)</h1>
        <p>Length:</p>
        <input type="number" value={inputNumber1} onChange={handleChange}/>
        <p>Width: </p>
        <input type="number" value={inputNumber2} onChange={handleChange2}/> <br></br>
        <p>Areal: {inputNumber1 * inputNumber2 / 2} </p>
      </div>
  )
}

export default TriangelAreaCalculator;