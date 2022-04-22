// bucket module

// Initial State
// 리덕스에서 저장하고 있는 초기 상태(=데이터)
const initialState = {
  list: ['영화관 가기', '매일 책읽기', '수영 배우기'],
};

// Action Type
const CREATE = 'bucket/CREATE';

// Action Creators
// 액션 생성 함수로 액션을 만들기 위해 사용하는 함수
export function createBucket(bucket) {
  console.log('액션생성함수 실행! state 업데이트 요청!');
  return { type: CREATE, bucket: bucket };
}

// Reducer
// store에 들어가 있는 데이터를 변경하는 곳
// 1) State와 2) ActionCreator에서 만든 액션 객체로 현재 상태를 업데이트 해준다
// reducer 함수가 호출될때 action이 들어오지 않을경우 디폴트 파라미터로 설정된 빈객체가 들어간다
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'bucket/LOAD':
      return state;

    case 'bucket/CREATE': {
      console.log('state 업데이트하기');
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    default:
      return state;
  }
}
