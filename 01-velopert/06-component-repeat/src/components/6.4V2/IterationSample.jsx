import React, { useRef, useState } from 'react';

const IterationSample = () => {
  const [lists, setLists] = useState([
    { id: 1, text: '신데렐라' },
    { id: 2, text: '백설공주' },
    { id: 3, text: '라푼젤' },
    { id: 4, text: '인어공주' },
  ]);

  const [value, setValue] = useState('');

  const getList = lists.map(list => (
    <li key={list.id} onDoubleClick={() => onDoubleClick(list.id)}>
      {list.text}
    </li>
  ));

  const onChange = e => {
    setValue(e.target.value);
  };

  const nextId = useRef(5);

  const onClick = () => {
    const nextList = lists.concat({
      id: nextId.current,
      text: value,
    });
    setLists(nextList);
    nextId.current += 1;
    setValue('');
  };

  const onDoubleClick = id => {
    const listRemove = lists.filter(list => list.id !== id);
    setLists(listRemove);
  };

  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{getList}</ul>
    </>
  );
};

export default IterationSample;
