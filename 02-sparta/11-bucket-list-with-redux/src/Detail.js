import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBucket } from './redux/modules/bucket';

const Detail = props => {
  // index 가져오기
  const params = useParams();
  // console.log('params', params);
  const bucket_index = params.index;
  const bucket_list = useSelector(state => state.bucket.list);
  // console.log('bucket_list', bucket_list[bucket_index]);

  const history = useHistory();

  const dispatch = useDispatch();

  const deleteDetail = () => {
    console.log('click');
    dispatch(deleteBucket(params.index));
    history.push('/');
  };

  return (
    <>
      <h1>{bucket_list[bucket_index]}</h1>
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
