// 4.2.3.2 Property Initializer Syntax를 사용한 메서드 작성
// 1) 메서드 바인딩은 생성자 메서드에서 하는 것이 일반적
// 2) 새 메서드를 만들때마다 생성자에 새 메서드를 바인딩해주어야함
// 3) 매번 이작업을 하는것은 불편함
// => 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의

import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // 화살표 함수를 사용하면 this는 클래스 인스턴스를 항상 가리키게 된다
  // 바인딩을 할 필요가 없다
  handleChange = e => {
    this.setState({
      message: e.target.value,
    });
    // 여기서 this는 클래스의 인스턴스 EventPractice를 가리킨다
    console.log(this);
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };

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
