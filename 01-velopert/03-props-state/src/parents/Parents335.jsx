// 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기

import React from 'react';
import MyComponent from '../components/3.3.5/MyComponent';

const Parents334 = () => {
  return (
    <div>
      <MyComponent name={'React'}>This is Children</MyComponent>
    </div>
  );
};

export default Parents334;
