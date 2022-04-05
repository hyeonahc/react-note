// 3.3.6.1 isRequired를 사용하여 필수 propTypes 설정

import React from 'react';
import MyComponent from '../components/3.3.6.1/MyComponent';

const Parents3361 = () => {
  return (
    <div>
      {/* MyComponent에서 propTypes를 사용해 name의 props는 무조건 문자열 형태여야 한다고 설정 */}
      <MyComponent name={'React'} time={'one year'} />
    </div>
  );
};

export default Parents3361;
