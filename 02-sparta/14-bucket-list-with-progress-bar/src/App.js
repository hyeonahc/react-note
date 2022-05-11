import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import BucketList from './BucketList';
import Detail from './Detail';
import NotFound from './NotFound';
// 리덕스에 있는 데이터 업데이트해주는 (액션을 디스패치해주는) 리덕스 훅 useDispatch import하기
import { useDispatch } from 'react-redux';
// dispatch() 함수의 파라미터로 사용할 액션생성함수 import하기
import { createBucket } from './redux/modules/bucket';
import Progress from './Progress';

function App() {
  // const [list, setList] = React.useState([
  //   '영화관 가기',
  //   '매일 책읽기',
  //   '수영 배우기',
  // ]);

  const text = React.useRef(null);

  // useDispatch() 함수를 사용해서 리덕스에 있는 데이터 수정
  // useDispatch() 함수는 객체를 리턴한다
  const dispatch = useDispatch();

  const addBucketList = () => {
    // 기존 코드는 함수가 실행되면 list의 state를 setList로 업데이트 되었다.
    // setList([...list, text.current.value]);

    // 액션 객체를 파라미터로 넣어주기 위해 액션 생성 함수를 사용해 액션 객체를 먼저 생성해준다
    dispatch(createBucket(text.current.value));
  };

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress />
        <Line />
        <Switch>
          <Route path={'/'} exact>
            <BucketList />
          </Route>
          <Route path={'/detail/:index'}>
            <Detail />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
      {/* 리덕스에 있는 데이터를 업데이트하기 위해서 액션을 디스패치해줘야한다 */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
