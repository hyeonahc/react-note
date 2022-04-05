// 4.2 예제로 이벤트 핸들링 익히기
// 4.2.1 컴포넌트 생성 및 불러오기
// 4.2.2 onChange 이벤트 핸들링하기
// 4.2.2.1 onChange 이벤트 설정

import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          // onChange={e => console.log(e)}
          // 콘솔창에 출력된 e: SyntheticBaseEvent로 웹브라우저의 네이티브 이벤트를 감싸는 객체
          // SyntheticBaseEvent {_reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input, …}
          onChange={e => console.log(e.target.value)}
          // onChange 이벤트가 발생할 때 변한 인풋값이 콘솔창에 출력된다
        />
      </>
    );
  }
}

export default EventPractice;
