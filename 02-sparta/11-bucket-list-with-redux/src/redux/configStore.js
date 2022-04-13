// bucket module을 가지고 만든 Store

import { createStore, combineReducers } from 'redux';
import bucket from './modules/bucket';

// Root Reducer
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가
const rootReducer = combineReducers({ bucket });
// const rootReducer = combineReducers({ bucket: bucket });

// Store
// 전역 데이터를 저장하는 곳
// rootReducer를 가지고 Store를 생성
const store = createStore(rootReducer);

export default store;

// 컴포넌트에 Store에 있는 state 주입해주기 => index.js
