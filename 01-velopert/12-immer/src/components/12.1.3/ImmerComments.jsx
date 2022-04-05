// 12.1.3 immer 사용법

// immer 라이브러리
// - 불변성을 유지하는 작업을 매우 간단하게 처리할 수 있다
// - 불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 해준다

// immer 사용법
// import produce from 'immer';
// const nextState = produce(originalState, draft => { draft.somewhere.deep.inside = 5; })

// immer 사용법 해석
// produce(originalState, draft) 함수
// 1) originalState: 수정하고 싶은 상태
// 2) draft: originalState값을 업데이트 해주는 콜백함수

import React from 'react';
import produce, { current } from 'immer';

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

// originalState의 값을 직접 바꾸고싶으면 draft를 사용한다
// immer을 사용하면 기존코드를 변화시키는 배열의 메소드를 사용할 수 있다
// 기존 코드를 변화시키는 배열의 메소드: push(추가), splice
// 기존 코드를 변화시키지 않는 배열의 메소드: concat(추가), filter(삭제), map(수정)

const nextState = produce(originalState, draft => {
  // 함수 draft는 originalState의 id가 2인 경우를 찾아 리턴한다
  // 즉 todo는 id가 2인 오브젝트를 가리킨다
  const todo = draft.find(t => t.id === 2);

  // todo는 id가 2인 오브젝트를 의미한다
  // id가 2인 오브젝트의 checked의 값을 true로 바꿔준다
  // immer를 사용했기 때문에 값을 직접바꿔도 괜찮다
  todo.checked = true;

  // originalState에 새로운 데이터 추가
  draft.push({
    id: 3,
    todo: '일정 관리 앱에 immer 적용하기',
    checked: false,
  });

  // Array.findIndex(): 조건에 만족하는 배열의 첫번째값의 인덱스를 리턴한다
  // Array.splice(start, deleteCount, item1, item2, itemN)
  draft.splice(
    // id가 1인 첫번째값(= id가 1인 첫번째 오브젝트)의 인덱스값 즉 0을 리턴한다
    // draft.splice(0, 1)
    // index가 0인 데이터부터 하나만 삭제한다
    // 즉 id가 1인 오브젝트 하나를 삭제한다
    draft.findIndex(t => t.id === 1),
    1
  );

  // immer로 변경된값 확인하는 방법
  console.log(current(draft));
});

const Immer = () => {
  return <div>Immer</div>;
};

export default Immer;
