// 3.3.2 컴포넌트 사용할 때 props값 지정하기

import React from 'react';
import MyComponent from '../components/3.3.1/MyComponent';

const Parents331 = () => {
  return (
    <div>
      <MyComponent name={'React'} />
    </div>
  );
};

export default Parents331;
