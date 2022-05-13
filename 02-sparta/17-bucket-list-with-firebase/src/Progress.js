import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Progress = props => {
  const bucket_list = useSelector(state => state.bucket.list);

  let count = 0;
  bucket_list.map(b => {
    if (b.completed) {
      count++;
    }
  });

  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + '%'} />
      <Circle />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
`;

const HighLight = styled.div`
  background: orange;
  width: ${props => props.width};
  height: 20px;
  transition: 1s;
  border-radius: 50px;
`;

const Circle = styled.div`
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50px;
  border: 3px solid orange;
  margin: 0 -20px 0;
`;

export default Progress;
