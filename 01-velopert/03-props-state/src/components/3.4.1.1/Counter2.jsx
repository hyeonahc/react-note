// 3.4.1.1 state 객체 안에 여러 값이 있을때 (비구조화 할당문법 사용)

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
    const { number, fixedNumber } = this.state;
    // number = this.state.number;
    // fixedNumber = this.state.fixedNumber;

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
