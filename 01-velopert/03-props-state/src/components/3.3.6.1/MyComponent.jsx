// 3.3.6.1 isRequired를 사용하여 필수 propTypes 설정

// propTypes
// - props의 데이터 타입을 지정하고 싶을때 사용
// - 지정한 데이터 타입을 사용하지 않으면 콘솔창에 에러메세지가 나타난다

import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, time }) => {
  return (
    <>
      <div>Hello I am learning {name}</div>
      <div>
        I've been learning {name} for {time}
      </div>
    </>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string,
  time: PropTypes.number.isRequired,
};

export default MyComponent;
