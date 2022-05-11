// bucket module

// Initial State
// 리덕스에서 저장하고 있는 초기 상태(데이터)
const initialState = {
  list: [
    { text: '영화관 가기', completed: false },
    { text: '매일 책읽기', completed: false },
    { text: '수영 배우기', completed: false },
  ],
};

// Action Type
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const DELETE = 'bucket/DELETE';

// Action Creators
// 액션 생성 함수로 액션을 만들기 위해 사용하는 함수
export function createBucket(bucket) {
  console.log('액션생성함수 실행! state 추가 요청!');
  return { type: CREATE, bucket: bucket };
}

export function updateBucket(bucket_index) {
  console.log('액션생성함수 실행! state 수정 요청!');
  return { type: UPDATE, bucket_index: bucket_index };
}

export function deleteBucket(bucket_index) {
  console.log('액션생성함수 실행! state 삭제 요청!');
  console.log('bucket_index: ', bucket_index);
  return { type: DELETE, bucket_index: bucket_index };
}

// Reducer
// store에 들어가 있는 데이터를 변경하는 곳
// 1) State와 2) ActionCreator에서 만든 액션 객체로 현재 상태를 업데이트 해준다
// reducer 함수가 호출될때 action이 들어오지 않을경우 디폴트 파라미터로 설정된 빈객체가 들어간다
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'bucket/CREATE': {
      console.log('state 생성하기');
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    case 'bucket/UPDATE': {
      console.log('state 업데이트하기');
      console.log(state, action);
      const new_bucket_list = state.list.map((l, i) => {
        if (parseInt(action.bucket_index) === i) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      console.log({ list: new_bucket_list });
      return { list: new_bucket_list };
    }

    case 'bucket/DELETE': {
      console.log('state 삭제하기');
      console.log('state: ', state, 'action: ', action);
      const new_bucket_list = state.list.filter((l, i) => {
        // true일때 남고 false일때 뺌
        console.log(
          action.bucket_index,
          i,
          parseInt(action.bucket_index) !== i
        );
        return parseInt(action.bucket_index) !== i;
      });
      return { list: new_bucket_list };
    }

    default:
      return state;
  }
}
