// 3.4.1.1 state 객체 안에 여러 값이 있을때

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    // const { number, fixedNumber } = this.state;
    // number = this.state.number
    // fixedNumber = this.state.fixedNumber

    return (
      <div>
        <h1>{this.state.number}</h1>
        <h2>바뀌지 않는 값: {this.state.fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
