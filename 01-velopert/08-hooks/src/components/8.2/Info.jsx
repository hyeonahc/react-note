// 8.2 useEffect

import React, { useState, useEffect } from 'react';

// useEffect;
// - 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정하는 Hook
// - 클래스형 컴포넌트에서 componentDidMount와 componentDidUpdate를 합친 형태
// - 컴포넌트가 Mount되거나 Update될때 실행된다
// - 컴포넌트가 업데이트될때: 1) props가 바뀔때 2) state가 바뀔때 3) 부모 컴포넌트가 리렌더링이될때
// - useEffect 함수는 기본적으로 렌더링되고 난 직후마다 실행되며 두번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다

// <Syntax>
// 컴포넌트가 랜더링, 업데이트될때마다 <code>가 실행된다
// useEffect(() => {
// 	<code>
// });

// 1. useEffect를 Mount될때만 실행하고 싶을때
// (= 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고 업데이트될때는 실행하지 않을때)
// => 함수의 두번째 파라미터로 비어 있는 배열을 넣어준다

// <Syntax>
// 컴포넌트가 랜더링될때만 <code>가 실행된다
// useEffect(() => {
// 	<code>
// }, []);

// 2. useEffect를 Update될때만 실행하고 싶을때
// => 함수의 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어준다

// <Syntax>
// state값이 업데이트될때만 <code>가 실행된다
// useEffect(() => {
// 	<code>
// }, [state]);

// 3. useEffect를 Unmoount될때만 실행하고 싶을때
// => return () => { <code> }를 useEffect 안에 넣어준다

// <Syntax>
// useEffect(() => {
// 	return () => {
// 		<code>
// 	}
// }, [])

// a, b라는 state 값이 업데이트 되었을때 같은 실행코드를 수행하려면 같은 useEffect 내에 배열안에 넣어주고 그렇지 않다면 다른 useEffect 안에 넣어준다

// case1
// useeffect(() => {
//  <code>
// }, [a, b])

// case2
// useeffect(() => {
//  <code>
// }, [a])

// useeffect(() => {
//  <code>
// }, [b])

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // 1. 마운트 + 업데이트될때 실행
  useEffect(() => {
    console.log('렌더링이 완료되었습니다');
    console.log('name:', name, 'nickname:', nickname);
  });

  // 2. 마운트
  useEffect(() => {
    console.log('마운트될 때만 실행됩니다');
  }, []);

  // 3. 마운트 + name값이 업데이트될때만 실행
  useEffect(() => {
    console.log('name이 업데이트 될때만 실행됩니다');
    console.log('name: ', name);
  }, [name]);

  // 4. unmount될때만 실행 (return문)
  useEffect(() => {
    return () => {
      console.log('언마운트될 때만 실행됩니다');
    };
  }, []);

  // 5. 혼합
  useEffect(() => {
    // 컴포넌트가 나타날때 (mount)
    // name값이 업데이트될때
    console.log('effect');
    console.log('name: ', name);
    // 컴포넌트가 사라질때 (unmount)
    // name값이 업데이트 되기 직전 값
    return () => {
      console.log('cleanup');
      console.log('name: ', name);
    };
  }, [name]);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={onChangeName}
      />
      <input
        type="text"
        placeholder="닉네임을 입력하세요"
        value={nickname}
        onChange={onChangeNickname}
      />
      <p>
        <b>이름:</b>
        {name}
      </p>
      <p>
        <b>닉네임:</b>
        {nickname}
      </p>
    </div>
  );
};

export default Info;
