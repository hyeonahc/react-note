import React, { useState } from 'react';
import { useRef } from 'react/cjs/react.development';

const IterationSample = () => {
  const [lists, setlists] = useState([
    { id: 1, text: '신데렐라' },
    { id: 2, text: '백설공주' },
    { id: 3, text: '라푼젤' },
    { id: 4, text: '인어공주' },
  ]);

  const [inputValue, setInputValue] = useState('');

  const getLists = lists.map(list => (
    <li key={list.id} onDoubleClick={() => onDoubleClick(list.id)}>
      {list.text}
    </li>
  ));

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const nextId = useRef(5);

  const onClick = () => {
    const nextLists = {
      id: nextId.current,
      text: inputValue,
    };
    setlists(lists.concat(nextLists));
    setInputValue('');
    nextId.current += 1;
  };

  const onDoubleClick = id => {
    console.log(id);

    setlists(lists.filter(list => list.id !== id));
  };

  return (
    <>
      <input type="text" onChange={onChange} value={inputValue} />
      <button onClick={onClick}>추가</button>
      <ul>{getLists}</ul>
    </>
  );
};

export default IterationSample;
