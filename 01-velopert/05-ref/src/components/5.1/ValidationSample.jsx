// 5.1 ref는 어떤 상황에서 사용해야 할까?
// 일반 HTML에서 DOM 요소에 이름을 달 때는 id를 사용
// 리액트에서 DOM 요소에 이름을 달 때는 ref를 사용
// = 리액트에서 특정 DOM에 작업을 해야 할 때 ref를 사용
// = 리액트에서 꼭 DOM을 직접적으로 건드려야할 때

// 5.1.1 예제 컴포넌트 생성
// 클래스형 컴포넌트에서 ref 사용하기 => React.createRef
// 함수형 컴포넌트에서 ref 사용하기 => Hooks UseRef

// 5.1.2 App 컴포넌트에서 예제 컴포넌트 렌더링

// 5.1.3 DOM을 꼭 사용해야하는 상황
// HTML에서는 상태 변화를 시키기 위해 DOM에 id를 부여
// 리액트에서는 state를 사용해서 상태변화를 시킬 수 있음
// 리액트에서 DOM에 직접 접근해 변환을 주어야할 때 (state를 못쓰고 ref를 부여해야할 때)
// 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때
// 애니메이션을 직접적으로 실행시킬 때
// 서드 파티 DOM 라이브러리를 React와 같이 사용할 때
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
      // validated: this.state.password === '0000' ? true : false
      // 삼항연산자 true, false는 생략할 수 있다
      // this.state.password 값이 '0000'인가요? 맞으면 true 틀리면 false
    });
  };

  render() {
    return (
      <div>
        <input
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
