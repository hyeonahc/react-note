import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
// 데이터를 가지고 오는 리덕스 훅 useSelector import하기
import { useSelector } from 'react-redux';

const BucketList = props => {
  console.log(props);
  console.log(props.list);
  // 기존에 코드는 부모 컴포넌트인 App.js에서 State 즉 props를 받아왔다
  // const my_lists = props.list;

  // useSelector() 함수를 호출하면 리덕스에 있는 모든 데이터를 가지고 온다
  // useSelector(() => ()) 리덕스에 있는 특정 데이터만 가지고 오고 싶다면 파라미터 값으로 화살표함수를 넣어준다
  // useSelector((state) => state) state는 리덕스가 가지고 있는 모든 데이터를 의미하므로 모든데이터를 리턴해준다
  // const data = useSelector(state => state);
  // console.log(data);
  // configStore.js에서 선언한 const rootReducer = combineReducers({ bucket }) Object bucket이 리턴된다

  const my_lists = useSelector(state => state.bucket.list);
  console.log(my_lists);

  const history = useHistory();

  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle
            className="list_item"
            key={index}
            onClick={() => {
              history.push('/detail/' + index);
            }}
          >
            {list}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default BucketList;
