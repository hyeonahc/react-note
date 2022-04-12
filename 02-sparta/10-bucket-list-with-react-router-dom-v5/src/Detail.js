import React from 'react';
import { useHistory } from 'react-router-dom';

const Detail = props => {
  const history = useHistory();
  return (
    <>
      <h1>상세 페이지입니다!</h1>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        돌아가기
      </button>
    </>
  );
};

export default Detail;
