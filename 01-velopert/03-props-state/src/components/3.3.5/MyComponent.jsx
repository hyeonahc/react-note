// 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기
// props값을 불러올때마다 props.name, props.children처럼 props라는 키워드가 반복된다
// 이와 같은 중복을 막기위해 ES6에서 도입된 비구조화 할당문법을 사용한다

// 방법 1: 함수 내부에서 비구조화할당문법 사용

import React from 'react';

const MyComponent = props => {
  const { name, children } = props;
  // name = props.name
  // children = props.chidlren

  return (
    <>
      <div>Hello I am learning {name}</div>
      {/* 비구조화 할당 문법을 사용해 props를 생략한채 props.name값을 불러왔다 */}
      <div>Let's see my props children: {children}</div>
    </>
  );
};

export default MyComponent;
