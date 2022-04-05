// 6.2 데이터 배열을 컴포넌트 배열로 변환하기

import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map(name => <li>{name}</li>);
  return <ul>{nameList}</ul>;
  // Warning: Each child in a list should have a unique "key" prop.
  // key 값이 없다는 에러가 발생한다
};

export default IterationSample;
