// 9.4.4 props에 따른 조건부 스타일링
// CSS에서 조건부 스타일링: className 사용
// styled-components에서 조건부 스타일링: props 사용
// -> 하지만 단순 변수 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우에는 CSS를 사용해야한다

import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  // 스타일 코드 여러줄을 props에 따라 넣어줄때는
  // 1. css를 styled-components에서 불러와야 한다 (정석)
  // 2. css를 사용하지 않고 아래와 같이 문자열로 작성한다 (단점 2가지)

  // css를 사용하지 않고 문자열로 넣어주었을때 단점 2가지
  // 1. 신택스 하이라이팅이 제대로 이루어지지 않는다 -> 익스텐션을 사용해 해결 가능
  // 2. props값을 사용하지 못한다 (Tagged 템플릿 리터럴이 아니기 때문에 함수를 받아 사용하지 못하기 때문에)

  // => 그냥 css 써라

  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;
