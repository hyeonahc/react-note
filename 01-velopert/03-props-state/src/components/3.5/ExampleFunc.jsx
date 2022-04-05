// 3.5 state를 사용할 때 주의 사항 (함수형 컴포넌트에서 단일 state값을 업데이트해야 할때)
// !!! state 값을 바꾸어야 할때는 setState 또는 useState를 통해 전달받은 세터함수를 사용 !!!

// 함수형 컴포넌트에서 state값을 지정할때
// 1) import React, { useState } from 'react'로 useState Hooks를 import 해온다
// 2) useState()함수를 사용해 초깃값을 지정, state에 접근할 변수 선언, state를 업데이트할 함수 선언을 한다
// 3) const [value, setValue] = useState(초깃값)

// 함수형 컴포넌트에서 단일 state값을 업데이트할때
// => 세터함수를 사용한다
// setValue(업데이트할 state값)

// 잘못된 코드
// const [name, setName] = useState('Oliva')
// name = 'Emma'

import React, { useState } from 'react';

const Example = () => {
  const [name, setName] = useState('Olivia');

  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setName('Emma');
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default Example;
