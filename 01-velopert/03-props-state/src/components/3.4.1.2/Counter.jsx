// 3.4.1.2 state를 constructor에서 꺼내기

import React, { Component } from 'react';

class Counter extends Component {
  // state를 constructor밖에 저장
  // state 값을 쓰고 싶을때는 this.state를 사용
  // this는 해당 인스턴스 Counter를 가리킨다
  state = {
    number: 0,
    fixedNumber: 0,
  };

  // state를 constructor안에 저장
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  render() {
    const { number, fixedNumber } = this.state;
    // const number = this.state.number
    // const fixedNumber = this.state.fixedNumber
    // state를 조회할때는 this.state를 사용

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
