// 5.2 ref 사용
// ref를 사용하는 두가지 방법
// 1) 콜백 함수 사용
// 2) createRef() 함수 사용

// 멤버변수: class 내부에 선언되어 있는 변수

// 5.2.2 createRef()를 통한 ref 설정
// createRef(): 리액트 v16.3부터 사용할 수 있는 리액트에 내장함수
// input = React.createRef();
// <input ref={this.input} />
// 멤버 변수 input에 React.createRef()를 담는다
// 멤버 변수를 가리킬때 this.input으로 접근 (클래스 안에 정의된 변수이므로)
// 접근시 this.input.current로 조회

// 5.2.3 적용
// 버튼을 한번 눌렀을 때 포커스가 다시 input 쪽으로 자동으로 넘어가는 컴포넌트
import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  // 멤버 변수 input에 React.createRef()를 담는다
  input = React.createRef();

  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = e => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          // 여기서 this.input은 위에서 선언한 React.createRef()로 만든 멤버변수를 의미한다
          ref={this.input}
          type="text"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
