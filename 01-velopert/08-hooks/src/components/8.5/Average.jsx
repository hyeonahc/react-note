// 8.5 useCallback

// useCallback
// - 렌더링 성능을 최적화해주는 Hook
// - 컴포넌트 안에 선언된 함수는 컴포넌트가 리렌더링이 될때마다 새로 함수를 다시 만들어준다
// - 만들어 놨던 함수를 재사용할 수 있게 해준다

// <Syntax>
// useCallback(생성하고 싶은 함수, 배열)
// 배열: 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시

// useCallback(() => {<code>}, [])
// => 컴포넌트가 처음 렌더링될때만 함수 생성

// useCallback(() => {<code>}, [a])
// => a라는 값이 바뀌었을 때만 함수 생성

import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // useCallback을 사용하지 않으면 컴포넌트가 리렌더링이 될때마다 onChange, onInsert 함수가 다시 선언된다

  // [] 빈배열: 컴포넌트가 처음 렌더링될 때만 함수 생성
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  // [number, list]: number 또는 list가 바뀌었을 때만 함수 생성
  // 기존에 있던 값 number, list를 조회
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
