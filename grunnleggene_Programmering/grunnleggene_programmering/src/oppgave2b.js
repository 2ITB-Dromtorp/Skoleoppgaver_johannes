import React, { Component } from 'react';

class TriangelAreaCalculator extends Component {
  constructor() {
    super();
    this.state = {
      length: 8,
      width: 8,
      area: null,
    };
  }

  calculateArea = () => {
    const { length, width } = this.state;
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

export default TriangelAreaCalculator;