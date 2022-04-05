// 6.4 응용
// 6.4.2 데이터 추가 기능 구현하기

// 배열에 새 항목을 추가할 때
// push(x): push 함수는 기존 배열 자체를 변경
// concat(o): concat은 새로운 배열을 만들어준다
// 리액트에서 상태를 업데이트할 때는 불변성을 유지해야한다
// 즉 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야한다
// 불변성 유지를 해 주어야 나중에 리액트 컴포넌트 성능을 최적화할 수 있다

import React, { useState } from 'react';

const IterationSampleAdd = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const nameList = names.map(name => <li key={name.id}>{name.text}</li>);

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

  return (
    <>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSampleAdd;
