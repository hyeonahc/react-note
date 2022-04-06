import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 500px;
  height: 70vh;
  background-color: white;
  border: 2px solid darkgrey;
  border-radius: 5px;
  padding: 3em;
  h1 {
    font-size: 2em;
    text-align: center;
    color: purple;
  }
  hr {
    border: 1px solid darkgrey;
    margin: 20px 0;
  }
`;

const List = styled.div`
  background-color: lightblue;
  width: 100%;
  height: 25px;
  margin: 15px 0;
  padding: 15px 0;
`;

const App = () => {
  const bucketlists = ['영화관 가기', '매일 책읽기', '수영 배우기'];

  return (
    <Background>
      <Box>
        <h1>내 버킷 리스트</h1>
        <hr />
        {bucketlists.map(bucketlist => (
          <List>{bucketlist}</List>
        ))}
      </Box>
    </Background>
  );
};

export default App;
