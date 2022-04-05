// 3.5 state를 사용할 때 주의 사항 (함수형 컴포넌트에서 배열이나 객체로 되어있는 state값을 업데이트해야 할때)
// !!! state 값을 바꾸어야 할때는 setState 또는 useState를 통해 전달받은 세터함수를 사용 !!!

// 함수형 컴포넌트에서 배열이나 객체로 되어있는 state값을 업데이트할때
// => 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 후, 그 사본의 상태를 setState 통해 업데이트 한다

// const array = [{ id:1, value: true }, { id:2, value: false }];
// 배열에서 데이터 추가: concat
// let nextArray = array.concat({ id: 3, value: true });
// 배열에서 데이터 삭제: filter
// let nextArray = array.filter(item => item.id === 2);
// 배열에서 데이터 수정: map
// let nextArray = array.map(item => item.id === 1 ? {...item, value: false} : item);

import React, { useState, useRef } from 'react';

const ExampleFunc2 = () => {
  const [inputValue, setInputValue] = useState('');

  const [names, setNames] = useState([
    { id: 1, username: 'Olivia' },
    { id: 2, username: 'Emma' },
    { id: 3, username: 'Amelia' },
  ]);

  const onChange = e => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const nextId = useRef(4);

  const onClick = () => {
    console.log(inputValue);

    const nextname = {
      id: nextId.current,
      username: inputValue,
    };
    setNames(names.concat(nextname));
    nextId.current += 1;
  };

  return (
    <div>
      <ul>
        {names.map(name => (
          <li key={name.id}>{name.username}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="type name here"
        onChange={onChange}
        value={inputValue}
      />
      <button onClick={onClick}>Add Name</button>
    </div>
  );
};

export default ExampleFunc2;
