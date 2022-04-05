// 3.4.1 클래스형 컴포넌트의 state

// state란?
// state는 컴포넌트 내부에서 설정하고 바꿀 수 있는 값을 말한다

import React, { Component } from 'react';

class Counter extends Component {
  // 클래스형 컴포넌트 Counter는 리액트의 Component 클래스를 상속받는다
  // 상속을 받는다는 것은 Component에 있는 모든 속성과 메소드를 가져와서 쓸 수 있다는 것이다
  // 여기서 this는 인스턴스(Counter)를 가리킨다
  // 인스턴스란 객체 지향 프로그래밍에서 클래스에 소속된 개별적인 객체를 말한다

  // constructor: 컴포넌트 생성자 메서드
  // - constructor를 만들때는 super(props)를 호출해야한다
  // - super(props)를 호출되면 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해준다
  // 생성자 함수: 객체를 생성해주는 함수
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state;
    // number = this.state.number

    return (
      <div>
        <h1>{number}</h1>
        <button
          // 이벤트 설정
          // 버튼을 클릭했을때 함수를 실행한다 (반드시 화살표 함수를 사용해야한다)
          // this.setState()함수: state 값을 바꿔준다
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
