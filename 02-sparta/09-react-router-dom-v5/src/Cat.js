import React from 'react';
import { useHistory } from 'react-router-dom';

const Cat = props => {
  console.log(props);

  let history = useHistory();
  return (
    <>
      <div>고양이 화면이에요.</div>
      <button
        onClick={() => {
          history.push('/dog');
        }}
      >
        강아지 화면으로 돌아가기
      </button>
    </>
  );
};

export default Cat;
