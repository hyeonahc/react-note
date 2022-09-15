import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

// store: slice를 모은 가장 큰 데이터 저장소
// slice: 기능별 데이터 저장소
// configureStore(): 여러 slice를 모아 하나의 store로 통합
// configureStore({ reducer: { 각각의 slice의 reducer } })
const store = configureStore({
  reducer: {
    // counterSlice.reducer: counterSlice 안에 있는 모든 reducer의 모음
    counter: counterSlice.reducer,
  },
})

export default store
