// counter 기능을 담당하는 slice 저장소
import { createSlice } from '@reduxjs/toolkit'

// createSlice(): slice 저장소 만들기
// createSlice({ 1.name 2.initialState 3.reducers }): createSlice함수 안에 객체형태로
// 1.name: 슬라이스 이름
// 2.initialState: 데이터 초기상태
// 3.reducers: dispatch() 함수가 수정을 요청하면 slice에 저장된 state를 변경하는 리듀서 함수
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    value: 0,
  },
  reducers: {
    // dispatch() 함수가 up을 요청할 경우 실행되는 함수
    // 리듀서 함수에서 기존 상태를 업데이트 하기 위해 필요한 두가지
    // 1) 기존 상태 2) 액션 객체
    up: (state, action) => {
      console.log('state, action: ', state, action)
      state.value = state.value + action.payload
    },
  },
})

export default counterSlice

export const { up } = counterSlice.actions
