// 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기
// this.setState를 사용하여 state 값을 업데이트할 때는 상태가 비동기적으로 업데이트된다
// this.setState()함수가 -> 어딘가로 요청 -> state값을 업데이트 해주는 과정에서 상태가 비동기적으로 업데이트된다
// 핵심은 this.setState()함수를 사용하면 state값이 동기적으로 업데이트되는 것이 아니기 때문에
// 바로 뒤코드에 this.setState()함수를 사용해 업데이트해준 state값을 사용할때 그 state값은 업데이트가 아직 되지 않아 원하는 코드를 실행할 수 없다

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
            this.setState({ number: number + 1 });
            // state에 있는 number의 값이 1만큼 커진다
            this.setState({ number: number + 1 });
            // state에 있는 number의 값이 1만큼 커진다
            // 두 코드를 실행하면 number의 값이 1씩, 1씩 커지므로 총 2씩 커져야하는데 그렇지 않다
            // 그 이유는 state값을 업데이트 할때는 상태가 비동기적으로 업데이트 되기 때문이다
            // 만약 동기적으로 실행되는 코드였으면 (= 한줄 한줄 실행되는 코드였으면) 버튼을 한번 클릭했을때 1씩 커지는 코드가 두개이므로 총 2만큼 커져야한다
            // 하지만 this.setState로 state값을 객체로 업데이트해주면 비동기적으로 처리된다
            // => 해결책: this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어준다
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
