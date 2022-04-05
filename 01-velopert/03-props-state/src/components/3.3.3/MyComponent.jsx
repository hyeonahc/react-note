// 3.3.3 props 기본값 설정: defaultProps
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값

import React from 'react';

const MyComponent = props => {
  // 부모 컴포넌트에서 자식 컴포넌트를 불러올때 props값을 전달해주지 않았을때 <MyComponent props="name" />
  return <div>Hello I am learning {props.name}</div>;
};

MyComponent.defaultProps = {
  name: 'undefined',
};

export default MyComponent;
