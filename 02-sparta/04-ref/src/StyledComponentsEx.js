import React from 'react';
import styled from 'styled-components';

const MyStyled = styled.div`
  width: 100vw;
  height: 150px;
  padding-top: 20px;
  /* background-color: ${props => props.bg_color}; */
  /* background-color: ${props => (props.bg_color ? 'skyblue' : 'green')}; */
  p {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
  }
`;

class StyledComponentsEx extends React.Component {
  render() {
    return (
      // 1. props를 전달해주기
      // <MyStyled bg_color={'pink'}>
      //   <p>I am learning React!</p>
      // </MyStyled>

      // 2. 삼항연산자 적용해주기
      <MyStyled bg_color={false}>
        <p>I am learning React!</p>
      </MyStyled>
    );
  }
}

export default StyledComponentsEx;
