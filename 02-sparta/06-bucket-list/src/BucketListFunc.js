import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const BucketListFunc = () => {
  const [bucketlists, setBucketlists] = useState([
    '영화관 가기',
    '매일 책읽기',
    '수영 배우기',
  ]);

  const inputValue = useRef();

  window.setTimeout(() => {
    console.log(inputValue);
    console.log(inputValue.current);
    console.log(inputValue.current.value);
  }, 1000);

  const onClick = () => {
    setBucketlists(bucketlists.concat(inputValue.current.value));
    inputValue.current.value = '';
  };

  return (
    <>
      <Background>
        <Box>
          <h1
            style={{
              textAlign: 'center',
              color: 'BlueViolet',
              fontSize: '2em',
            }}
          >
            내 버킷리스트
          </h1>
          <hr style={{ margin: '1em 0' }} />
          <ul style={{ listStyleType: 'none', paddingInlineStart: '0' }}>
            {bucketlists.map((bucketlist, index) => (
              <List key={index}>{bucketlist}</List>
            ))}
          </ul>
        </Box>
        <InputBox>
          <div>
            <input type="text" ref={inputValue} />
            <button onClick={onClick}>추가하기</button>
          </div>
        </InputBox>
      </Background>
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: Gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  min-width: 500px;
  width: 40vw;
  height: 60vh;
  background-color: White;
  padding: 1.2em;
  margin-bottom: 1em;
  border: 2px solid DarkGray;
  border-radius: 3px;
`;

const List = styled.li`
  height: 30px;
  background-color: AliceBlue;
  padding: 0.75em;
  margin: 1em 0;
`;

const InputBox = styled.div`
  min-width: 500px;
  width: 40vw;
  height: 10vh;
  background-color: White;
  padding: 1.2em;
  border: 2px solid DarkGray;
  border-radius: 3px;
`;

export default BucketListFunc;
