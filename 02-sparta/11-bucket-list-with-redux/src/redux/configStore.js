// bucket module을 가지고 만든 Store

import { createStore, combineReducers } from 'redux';
// createStore: Store 생성
// combineReducer: 여러개의 리듀서를 묶어주는 함수
import bucket from './modules/bucket';
// 리듀서 import하기
// bucket.js에서 export default로 값을 내보내고 있다

// Root Reducer
// 나중에 리듀서를 여러개 만들게 되면 combineReducer()함수의 파라미터로 하나씩 추가
// 예) combineReducers({ bucket, newReducer... });
const rootReducer = combineReducers({ bucket });
// const rootReducer = combineReducers({ bucket: bucket });

// Store
// 전역 데이터를 저장하는 곳
// rootReducer를 가지고 Store를 생성
const store = createStore(rootReducer);

export default store;

// 컴포넌트에 Store에 있는 state 주입해주기 => index.js
