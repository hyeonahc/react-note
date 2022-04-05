// 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기 (number1, number2)
// => 해결책: this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어준다 (prevState, props 사용)
// this.setState를 사용하여 state 값을 업데이트할 때는 상태가 비동기적으로 업데이트된다

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number1: 0,
    number2: 0,
  };

  render() {
    const { number1, number2 } = this.state;
    // number = this.state.number

    return (
      <div>
        <h1>{number1}</h1>
        <h2>{number2}</h2>
        <button
          // state값이 서로 연동되었을때만(number1의 state값이 number2에 영향을 줄때) 콜백함수를 사용하고
          // 일반적으로는 setState()함수안에 업데이트할 state 오브젝트를 넣어준다
          onClick={() => {
            // number1이 처리된 후에 number2값의 상태가 맞게 업데이트 될 수 있다
            this.setState(prevState => {
              return {
                number1: prevState.number1 + 1,
              };
            });
            // number2
            this.setState(prevState => ({
              number2: prevState.number1 * 2,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
