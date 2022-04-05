// 3.3.1 JSX 내부에서 props 렌더링

// props
// - properties의 줄임말
// - 부모 컴포넌트에서 자식 컴포넌트의 속성을 설정할 때 사용하는 요소
// - 자식 컴포넌트가 부모 컴포넌트한테 전달받은 데이터

import React from 'react';

const MyComponent = props => {
  console.log(props);
  // props값은 컴포넌트 함수의 파라미터로 받아와서 사용
  // <MyComponent name={'React'} />
  return <div>Hello I am learning {props.name}</div>;
};

export default MyComponent;
