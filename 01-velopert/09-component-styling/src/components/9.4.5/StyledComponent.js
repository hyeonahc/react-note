// 9.4.5 반응형 디자인 (media query 사용)
// styled-components에서 반응형 디자인을 사용하는 두가지 방법
// 1. media query 사용 -> 같은 작업을 여러 컴포넌트에서 반복해줘야하는 불편함
// 2. util 함수 사용

// 구현할 디자인
// 1024px 이상: Box 컴포넌트 가운데 정렬
// 768px 미만: 전체 너비를 차지하게 한다

import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  // 추가한 코드
  width: 1024px;
  margin: 0 auto;

  // media query 사용
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 768px;
  }
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
