// 4.2.3 임의 메서드 만들기
// 4.2.3.1 기본방식

import React, { Component } from 'react';

// 1) 함수가 호출될 때 this는 호출부에 따라 결정된다
// 2) 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버린다
// 3) 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서
// 4) 메서드를 this와 바인딩하는 작업이 필요하다
// 5) 만약 바인딩하지 않는다면 this는 undefined를 가리키게 된다

class EventPractice extends Component {
  state = {
    message: '',
  };

  // 클래스의 임의 메서드의 this가 컴포넌트 자기 자신을 가리키기위해서 메서드를 this와 바인딩하는 작업을 해준다
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // 2) 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버린다
  handleChange(e) {
    this.setState({
      // 3) this는 컴포넌트 자신 즉 EventPractice를 가리켜야한다
      message: e.target.value,
    });
    console.log(this);
    // this를 바인딩했을 경우: this는 EventPractice를 가리킨다
    // this를 바인딩하지 않았을 경우: this는 undefined를 가리킨다
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
