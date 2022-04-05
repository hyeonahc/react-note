// 6.4 응용
// 6.4.1 초기 상태 설정하기

import React, { useState } from 'react';

const IterationSampleInitial = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSampleInitial;
