import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateBucket, deleteBucket } from './redux/modules/bucket';

const Detail = () => {
  // index 가져오기
  const params = useParams();
  // console.log('params', params);
  const bucket_index = params.index;
  const bucket_list = useSelector(state => state.bucket.list);
  console.log('bucket_list', bucket_list);

  const history = useHistory();

  const dispatch = useDispatch();

  const completeList = () => {
    dispatch(updateBucket(bucket_index));
  };

  const deleteDetail = () => {
    console.log('click');
    dispatch(deleteBucket(bucket_index));
    history.push('/');
  };

  return (
    <>
      <h1>{bucket_list[bucket_index].text}</h1>
      <button onClick={completeList}>완료하기</button>
      <button onClick={deleteDetail}>삭제하기</button>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        돌아가기
      </button>
    </>
  );
};

export default Detail;
