// 5.2 ref 사용
// ref를 사용하는 두가지 방법
// 1) 콜백 함수 사용
// 2) createRef() 함수 사용

// 멤버변수: class 내부에 선언되어 있는 변수

// 5.2.1 콜백 함수를 통한 ref 설정
// ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 됩니다
// <input ref={(ref) => {this.input = ref}}
// ref={(해당 엘리먼트를 가리키는 멤버변수) => {this.input = 해당 엘리먼트를 가리키는 멤버변수}
// this.input은 <input ... /> 엘리먼트를 가리키게 하는 레퍼런스 작업을 하는 것
// this.input은 input 요소의 DOM을 가리킨다
// 고로 앞으로 리액트 코드 내에서 this.input을 통하여 input 요소에 접근이 가능
// 리액트 내에서 this.input이 id처럼 쓰이게 된 것
// 여기서 this.input은 이름일뿐이므로 this.telephoneInput으로 이름을 지정해주어도 된다

// *** 중요한 부분 ***
// this.input은 엄밀히 이야기하면 input 엘리먼트를 가리키는 것이 아니라 input 요소의 DOM을 가리킨다
// input 엘리먼트 vs input DOM을 가리키는것의 차이?
// input 엘리먼트를 가리킨다면 단순히 해당 엘리먼트의 정보값만 가져오겠지만 input DOM을 가리킨다면
// DOM에 저장되어있는 input의 기본 프로퍼티와 메소드를 상속받는다
// 즉 input DOM을 가리킨다면 기존에 있던 모든 input의 속성과 메소드도 함께 가져와 가리키는 것이다.=

// 5.2.3 적용
// 버튼을 한번 눌렀을 때 포커스가 다시 input 쪽으로 자동으로 넘어가는 컴포넌트
import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
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
          ref={ref => (this.input = ref)}
          // ref에 콜백함수 전달 (마치 onChange에 handleChange 함수를 전달해준 것처럼)
          // ref는 <input ... /> 태그를 가리킨다
          // this.input 이라는 클래스 내부에 있는 변수 (= 멤버변수)에 <input ... /> 태그를 할당한다
          // const input = document.queryElementByTagName('input')와 비슷한 기능
          // input이라는 변수가 해당 엘리먼트를 가리키게 만드는 기능
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
