// 9.4 스타일에서 props 조회하기
// styled-components를 사용하면 스타일 쪽에서 컴포넌트에게 전달된 props 값을 참조할 수 있습니다
import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  // 스타일쪽에서 props로 넣어준 값을 전달해 줄 수 있습니다
  padding: 1rem;
  display: flex;
`;

const StyledComponent = () => {
  return <Box color="black"></Box>;
};

export default StyledComponent;
