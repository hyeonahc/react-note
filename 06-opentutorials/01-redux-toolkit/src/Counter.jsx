import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { up } from './counterSlice'

const Counter = () => {
  // const store = configureStore({
  //   reducer: {
  //     counter: counterSlice.reducer,
  //   },
  // })
  const count = useSelector(state => {
    // state: configureStore 함수 안에 있는 reducer
    return state.counter.value
  })

  // dispatch(action)
  // dispatch(): 저장소에 있는 reducer는 dispatch() 함수가 수정을 요청하면 store에 저장된 state를 변경해준다
  // action: 이때 dispatch 함수에 action 객체를 파라미터로 넘기면 reducer에서 state를 업데이트 해준다
  // action: {type: '이름', data: {state 업데이트 내용}}
  const dispatch = useDispatch()

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          // 일반 리덕스: dispatch({ type: 'counterSlice/up', step: 2 })
          // 리덕스 툴킷: dispatch(counterSlice.actions.up(2))
          // counterSlice에서 up export: export const { up } = counterSlice.actions
          // !!! 여기서 reducer 함수에 전달해주는 값은 payload !!!
          dispatch(up(2))
        }}>
        +2
      </button>
    </div>
  )
}

export default Counter
