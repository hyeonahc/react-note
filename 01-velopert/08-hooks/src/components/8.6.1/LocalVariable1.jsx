// 8.6.1 useRef 로컬 변수 사용하기

import React, { useState, useRef } from 'react';

const LocalVariable1 = () => {
  // 1. useState를 사용해서 값을 지정해줄때
  // state 값이 업데이트 될때마다 컴포넌트가 다시 렌더링 된다
  const [stateNum, setStateNum] = useState(0);

  // 2. 변수에 값을 지정해줄때
  // varNum의 값이 업데이트 될때마다 컴포넌트가 다시 렌더링이 되기 때문에 varNum의 값은 영원히 0이다
  let varNum = 0;

  // 3. useRef를 사용해서 값을 지정해줄때
  // refNum의 값이 업데이트 될때마다 컴포넌트가 다시 렌더링 되지 않고 값이 업데이트 된다!
  // 컴포넌트가 다시 렌더링되지 않기 때문에 return문 안에 있는 {refNum.current}에 업데이트 된 값이 반영이 되지 않는다

  const refNum = useRef(0);

  const onClick = () => {
    varNum++;
    // setStateNum(stateNum + 1);
    refNum.current++;
    console.log('refNum.current', refNum.current);
  };

  // Force Ref Update 버튼을 누르면 state 값이 업데이트 되기 때문에 컴포넌트가 렌더링이된다
  // 컴포넌트가 렌더링이 되면 업데이트 된 ref값이 브라우저에 반영된다
  // 하지만 test라는 state 값은 forceUpdate()가 실행되어도 값이 바뀌지 않기 때문에
  // 몇번 실행한 후 리액트가 알아서 test의 state 값 업데이트를 중단한다
  // 이것을 방지하기 위해 forceUpdate(!false);를 사용한다
  const [test, forceUpdate] = useState(false);

  return (
    <div>
      <div>
        <p>stateNum: {stateNum}</p>
        <p>varNum: {varNum}</p>
        <p>refNum: {refNum.current}</p>
        <button onClick={onClick}>+1</button>
        <button
          onClick={() => {
            forceUpdate();
          }}
        >
          Force Ref Update
        </button>
      </div>
    </div>
  );
};

export default LocalVariable1;
