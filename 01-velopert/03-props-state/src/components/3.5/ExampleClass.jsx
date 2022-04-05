// 3.5 state를 사용할 때 주의 사항 (클래스형 컴포넌트)
// !!! state 값을 바꾸어야 할때는 setState 또는 useState를 통해 전달받은 세터함수를 사용 !!!

import React, { Component } from 'react';

class ExampleClass extends Component {
  render() {
    return <div></div>;
  }
}

export default ExampleClass;
