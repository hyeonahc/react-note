// 3.4.2 함수 컴포넌트에서 useState 사용하기
// 클래스형 컴포넌트에서 state값 설정하기
// state = { key: value } 객체형태
// 함수형 컴포넌트에서 state값 설정하기
// useState라는 함수를 사용 (Hooks)

// 3.4.2.1 배열 비구조화 할당
// 배열 비구조화 할당: 배열 안에 들어 있는 값을 쉽게 추출 할 수 있도록 해 주는 문법
// const array = [1, 2]
// const [one, two] = array
// const one = array.one
// const two = array.two

// 3.4.2.2 useState 사용하기
// const [현재상태, 상태를 바꿔주는 함수] = useState('초깃값')
// 배열 비구조화 할당문법을 사용했다
// useState는 리액트에서 정의한 함수다
// function useState(initialValue) { ... return [Value, setValue()]}

// 1) useState() 함수 호출
// 2) 배열 [data1, data2]이 반환됨
// 3) data1에는 현재상태
// 4) data2에는 상태를 바꿔주는 함수 (Setter 함수)

// 초깃값은 어떤 데이터 형태도 가능하다
// 참고로 클래스형 컴포넌트에서는 state값으로 객체만을 가져올 수 있었다

import React, { useState } from 'react';
// useState import하기

const Say = () => {
  const [message, setMessage] = useState('');

  const onClickEnter = () => {
    setMessage('안녕하세요');
  };

  const onClickLeave = () => {
    setMessage('안녕히 가세요');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
