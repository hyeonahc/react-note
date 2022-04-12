import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = props => {
  const history = useHistory();
  return (
    <>
      <div>페이지를 찾을 수 없습니다.</div>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </button>
    </>
  );
};

export default NotFound;
