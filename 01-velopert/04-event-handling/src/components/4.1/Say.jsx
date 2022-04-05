// 4.1 리액트의 이벤트 시스템

// 4.1.1 이벤트를 사용할 때 주의사항
// 1) 이벤트 이름은 카멜 표기법으로 작성
// HTML에서 onclick은 리액트에서 onClick으로 작성해야 한다
// 2) 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라 함수형태의 값을 전달
// ???
// 3) DOM 요소에만 이벤트를 설정할수 있다
// div, button, input 태그와 같은 DOM 요소에는 이벤트를 설정할 수 있지만
// 컴포넌트 자체에는 이벤트를 설정할 수 없다
// <MyComponent onClick={doSomething} />

// 4.1.2 이벤트 종류
// 참조: https://reactjs.org/docs/events.html

import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');

  const Enter = () => {
    setMessage('안녕하세요');
    setColor('blue');
  };
  const Leave = () => {
    setMessage('안녕히 가세요');
    setColor('green');
  };

  return (
    <>
      <button onClick={Enter}>입장</button>
      <button onClick={Leave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
    </>
  );
};

export default Say;
