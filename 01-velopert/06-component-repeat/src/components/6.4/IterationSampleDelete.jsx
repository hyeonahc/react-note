// 6.4 응용
// 6.4.3 데이터 제거 기능 구현하기

// 배열에 항목을 삭제할 때 (불변성을 유지하면서 배열 특정 항목을 지울때)
// Array.filter(함수): 함수 조건에 맞는 데이터만 배열에 남을 수 있다

// 데이터 추가와 제거
// 상태 안에서 배열을 변형할 때는 배열에 직접 접근하여 수정하는 것이 아니라
// concat, filter 등 배열 내장 함수를 사용하여 새로운 배열을 만든 후
// 이를 새로운 상태로 설정해야한다

import React, { useState } from 'react';

const IterationSampleDelete = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText('');
  };

  const onRemove = id => {
    // console.log('double clicked');
    const nextNames = names.filter(name => id !== name.id);
    setNames(nextNames);
  };

  const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSampleDelete;
