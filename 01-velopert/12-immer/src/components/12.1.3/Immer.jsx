// 12.1.3 immer 사용법

import React from 'react';
import produce from 'immer';

const originalState = [
  {
    id: 1,
    todo: '전개 연산자(Spread Operator)와 배열 내장 함수로 불변성 유지하기',
    checked: true,
  },
  {
    id: 2,
    todo: 'immer로 불변성 유지하기',
    checked: false,
  },
];

const nextState = produce(originalState, draft => {
  const todo = draft.find(t => t.id === 2);

  todo.checked = true;

  draft.push({
    id: 3,
    todo: '일정 관리 앱에 immer 적용하기',
    checked: false,
  });

  draft.splice(
    draft.findIndex(t => t.id === 1),
    1
  );
});

const Immer = () => {
  return <div>Immer</div>;
};

export default Immer;
