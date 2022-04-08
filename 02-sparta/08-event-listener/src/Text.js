import React from 'react';

const Text = props => {
  const text = React.useRef(null);

  const hoverEvent = e => {
    console.log(e.target);
    console.log(text.current);
    text.current.style.background = 'yellow';
  };

  React.useEffect(() => {
    text.current.addEventListener('mouseover', hoverEvent);
    return () => {
      text.current.removeEventListener('mouseover', hoverEvent);
    };
  }, [text]);

  // 마운트가 된 후에 txt에는 <h1> DOM이 담겨져 있다
  return <h1 ref={text}>텍스트입니다!</h1>;
};

export default Text;

// useEffect 사용법
// useEffect()는 리액트 훅으로 라이프사이클 componentDidMount와 componentDidUpdate, componentWillUnmount의 기능을 합친것
// useEffect(() => {}, [])
// 첫번째 인자: 화살표 함수로 렌더링할때 실행할 함수가 들어감
// 두번째 인자: 디펜던시 어레이로 여기 넣어준 값이 변하면 첫번째 인자인 콜백함수를 실행

// 랜더링이 일어나면 첫번째 인자로 들어있는 화살표 함수를 무조건 실행
// 리랜더링이 일어나면 두번째 인자로 들어있는 배열의 요소가 바뀐경우에만 화살표 함수를 실행

// 1. render
// componenetDidMount() { <code> }
// useEffect(() => { <code> }, []);
// 2. update
// componentDidUpdate() { <code> }
// useEffect(() => { <code> }, [ <data> ]);
// 3. cleanup
// componentWillUnmount() { <code> }
// useEffect(() => { return () => { <code> } }, []);
