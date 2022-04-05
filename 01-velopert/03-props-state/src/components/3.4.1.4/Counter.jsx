// 3.4.1.4 this.setState가 끝난 후 특정 작업 실행하기
// setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때
// setState(par1, par2) par2에 콜백함수를 등록하여 작업을 처리
// par1안에 있는 코드가 끝난 후 par2가 실행된다
// par1: 업데이트한 state값

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
            this.setState(
              // par1: 업데이트할 state값
              {
                number: number + 1,
              },
              // par2: state값이 업데이트된 후 실행할 코드
              () => {
                console.log('방금 state가 호출되었습니다');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
