import React from 'react';
import styled from 'styled-components';

class Start extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Box>
            <img
              src="https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F72984f00-9548-48b5-9d32-59452412f640%2Fscc_img01.png?table=block&id=4c27db30-bb5e-48ba-8c1c-43d6b4d32d48&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=560&userId=&cache=v2"
              alt=""
            />
            <h1>나는 {this.props.name}에 대해 얼마나 알고 있을까?</h1>
            <Input />
            <Button placeholder="내 이름">시작하기</Button>
          </Box>
        </Container>
      </>
    );
  }
}

export default Start;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  min-width: 500px;
  width: 30vw;
  height: 70vh;
  border: 2px solid darkgrey;
  text-align: center;
  padding: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 30em;
  margin-bottom: 30px;
  border: 1px solid lavender;
  height: 2em;
  border-radius: 25px;
  padding: 0.5em 1em;
`;

const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  width: 10em;
  background-color: lavender;
  border-radius: 25px;
  padding: 1em;
  cursor: pointer;
  font-weight: bold;
  border: none;
`;
