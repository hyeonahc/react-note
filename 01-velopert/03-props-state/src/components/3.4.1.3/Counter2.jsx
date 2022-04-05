// 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기
// => 해결책: this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어준다 (prevState, props 사용)
// this.setState를 사용하여 state 값을 업데이트할 때는 상태가 비동기적으로 업데이트된다

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    // number = this.state.number

    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 });
            // 기존의 코드: state값을 업데이트 해줄때 객체를 넘겨주었다
            // 문제점: 비동기적으로 처리되어서 다음코드에 업데이트된 state 값을 반영할 수가 없다

            // 새로운 코드: state값을 업데이트 해줄때 함수의 인자로 넣어준다
            // 1) 화살표 함수
            this.setState(prevState => {
              return {
                number: prevState.number + 1,
              };
            });
            // 2) 객체를 바로 반환하는 코드 prevState => ({})
            this.setState(prevState => ({
              number: prevState.number + 1,
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
