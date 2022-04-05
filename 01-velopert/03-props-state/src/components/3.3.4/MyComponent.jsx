// 3.3.4 태그 사이의 내용을 보여 주는 children

import React from 'react';

const MyComponent = props => {
  console.log(props);

  return (
    <>
      <div>Let's see my props children: {props.children}</div>
    </>
  );
};

export default MyComponent;
