import React from 'react';
import styled, { css } from 'styled-components';

// A || B: A가 false면 B를 실행해라
// A && B: A가 true면 B를 실행해라

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  // props.color 값이 있으면 그 값이 background의 value가 된다
  // props.color 값을 없으면 default 값으로 지정된 blue가 background의 value가 된다
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

  /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
  /* Button:hover */
  &:hover {
    background: rgba(252, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다 */
  /* 즉 inverted의 props값이 true인 두번째 Button 컴포넌트에 아래의 스타일링 코드가 실행된다 */
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

  /* button + button */
  /* <button></button><button></button> */
  /* 두번째 버튼을 의미한다 */
  /* 테두리만 Button 컴포넌트를 셀렉트 */
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
