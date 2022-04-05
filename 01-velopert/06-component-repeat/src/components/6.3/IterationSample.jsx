// 6.3 key

// key란?
// - 리액트에서 key는 컴포넌트 배열을 렌더링했을대 어떤 원소에 변동이 있었는지 알아내려고 사용한다
// - 유동적인 데이터를 다룰때는 원소를 새로 생성, 제거, 수정이 일어난다
// - key가 없을때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지한다
// - 하지만 key가 있다면 key 값을 사용해서 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있다
// - key 값은 언제나 유일해야한다 (데이터가 가진 고윳값으로 key 값을 설정한다)

/*
key 값은 언제나 유일해야하며 데이터가 가진 고윳값으로 설정한다
articles라는 배열에는 고윳값, id가 존재한다 (= 각 객체마다 고유하게 가지고 있는 값)
이때 id로 key값을 설정한다
만약 객체 안에 고윳값이 없는 경우에는 map 함수에 전달되는 콜백함수의 인수인 index 값을 고윳값으로 설정하면 된다
고유한 값이 없을때만 index 값을 key로 사용해야 한다
index를 key로 사용하면 배열이 변경될때 효율적으로 리렌더링하지 못한다

articles = [
  {
    title: ''
    writer: ''
    id: 1
  }
  {
    title: ''
    writer: ''
    id: 2
  }
  {
    title: ''
    writer: ''
    id: 3
  }
]

const articleList = articles.map(article => (
  <Article
    title={article.title}
    writer={article.writer}
    key={article.id}
  />
))

*/

// 간단히 정리하자면...
// key는 값이 변동되었을때 더욱 빠르게 변화를 감지할수 있게 도와주는 문자열 속성 (string attribute)
// key가 없다면 값이 변동되었을때 Virtual DOM에서 순차적으로 리스트를 비교해 변화를 감지한다 (= 느리다)

import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;

  // Warning: Each child in a list should have a unique "key" prop.
  // key 값이 없다는 에러가 더이상 발생하지 않는다
};

export default IterationSample;
