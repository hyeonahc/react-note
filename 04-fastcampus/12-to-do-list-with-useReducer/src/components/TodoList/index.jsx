import React, { useEffect, useReducer, useRef } from 'react'
import { todoReducer } from '../../reducer/todoReducer'
import TodoAdd from '../TodoAdd'
import TodoItem from '../TodoItem'
import * as S from './style'

const TodoList = () => {
  const todoId = useRef(2)

  const [todoData, dispatch] = useReducer(todoReducer, [
    { id: 1, date: '2022-08-21', content: '강의하기', checked: false },
  ])

  const todoAddHandler = (userInput) => {
    dispatch({
      type: 'ADD',
      data: { id: todoId.current, ...userInput, checked: false },
    })
    todoId.current += 1
  }

  const todoRemoveHandler = (id) => {
    dispatch({
      type: 'REMOVE',
      data: { id },
    })
  }

  const todoCheckHandler = (id) => {
    dispatch({
      type: 'CHECK',
      data: { id },
    })
  }

  useEffect(() => {
    console.log(todoData)
  }, [todoData])

  return (
    <S.TodoContainer>
      <S.TodoTitle>나만의 Todo List</S.TodoTitle>
      <TodoAdd todoAddHandler={todoAddHandler} />
      {todoData.map((itemData) => {
        return (
          <TodoItem
            key={itemData.id}
            itemData={itemData}
            todoCheckHandler={todoCheckHandler}
            todoRemoveHandler={todoRemoveHandler}
          />
        )
      })}
    </S.TodoContainer>
  )
}

export default TodoList
