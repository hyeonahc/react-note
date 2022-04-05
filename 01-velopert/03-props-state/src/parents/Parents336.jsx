// 3.3.6 propTypes를 통한 props 검증

import React from 'react';
import MyComponent from '../components/3.3.6/MyComponent';

const Parents336 = () => {
  return (
    <div>
      {/* MyComponent에서 propTypes를 사용해 name의 props는 무조건 문자열 형태여야 한다고 설정 */}
      <MyComponent name={'React'} />
      {/* 문자열이 아닌 다른 데이터 형태를 전달하면 출력은 되지만 콘솔창에 에러메세지가 나타난다 */}
      <MyComponent name={1} />
    </div>
  );
};

export default Parents336;
