// 3.3.6 propTypes를 통한 props 검증

// propTypes
// - props의 데이터 타입을 지정하고 싶을때 사용
// - 지정한 데이터 타입을 사용하지 않으면 콘솔창에 에러메세지가 나타난다

import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name }) => {
  return (
    <>
      <div>Hello I am learning {name}</div>
    </>
  );
};

// name이라는 props값은 반드시 문자열이어야한다
MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
