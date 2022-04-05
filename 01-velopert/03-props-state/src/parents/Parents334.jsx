// 3.3.4 태그 사이의 내용을 보여 주는 children
// children: 컴포넌트 태그 사이에 있는 내용을 보여주는 props

import React from 'react';
import MyComponent from '../components/3.3.4/MyComponent';

const Parents334 = () => {
  return (
    <div>
      {/* 컴포넌트 태그 사이에 있는 내용을 보여주고 싶으면 해당 자식 컴포넌트에서 props.children으로 접근 */}
      <MyComponent>This is Children</MyComponent>
    </div>
  );
};

export default Parents334;
