// 9.4.2 스타일링된 엘리먼트 만들기
// styled-componenets를 사용하여 스타일링된 엘리먼트를 만들 때
// 불러오기: 컴포넌트 파일 상단에서 styled를 import
// 사용하기: styled.태그명

import styled from 'styled-components';

// Tagged 템프릿 리터럴 문법 사용
// 해당 스타일이 적용된 div로 이루어진 리액트 컴포넌트가 생성됨
const MyComponent = styled.div`
  font-size: 2rem;
`;

// button에 스타일링을 주고 싶을 때
// styled.button
const MyComponent2 = styled.button`
  font-size: 2rem;
`;

// 사용해야 할 태그명이 유동적이거나 특정 컴포넌트 자체에 스타일링해 주고 싶다면
// alpha라는 HTML 태그는 styled 함수에 정의가 되어 있지 않다
// <alpha></alpha>라는 HTML을 만들고 싶을 때 사용한다
// 태그의 타입을 styled 함수의 인자로 전달
const MyInput = styled('alpha')`
  background: gray;
`;

// 아예 컴포넌트 형식의 값을 넣어줌
// Link는 컴포넌트
// StyledLink컴포넌트는 Link컴포넌트에 스타일만 추가해준 컴포넌트
// Link 컴포넌트는 리액트 라우터에 있는 컴포넌트
// 스타일을 추가해주고 싶을때 이런식으로 사용하면 된다
// const StyledLink = styled(Link)`
//   color: blue;
// `;

const StyledComponent = () => {
  return (
    <div>
      <MyComponent>Hello</MyComponent>
      <MyComponent2>Button</MyComponent2>
      <MyInput></MyInput>
      {/* <Link></Link> */}
      {/* StyledLink컴포넌트는 Link컴포넌트에 스타일만 추가해준 컴포넌트 */}
      {/* <StyledLink></StyledLink> */}
    </div>
  );
};

export default StyledComponent;
