import React, { useEffect, useRef, useState } from 'react'
import TodoAdd from '../TodoAdd'
import TodoItem from '../TodoItem'
import * as S from './style'

const TodoList = () => {
  const todoId = useRef(2)

  const [todoData, setTodoData] = useState([
    { id: 1, date: '2022-08-21', content: '강의하기', checked: false },
  ])

  const todoRemoveHandler = (id) => {
    setTodoData(todoData.filter((itemData) => itemData.id !== id))
  }

  const todoCheckHandler = (id) => {
    setTodoData(
      todoData.map((itemData) =>
        itemData.id === id
          ? { ...itemData, checked: !itemData.checked }
          : itemData,
      ),
    )
  }

  useEffect(() => {
    console.log(todoData)
  }, [todoData])

  return (
    <S.TodoContainer>
      <S.TodoTitle>나만의 Todo List</S.TodoTitle>
      <TodoAdd todoId={todoId} todoData={todoData} setTodoData={setTodoData} />
      {todoData.map((itemData) => {
        return (
          <TodoItem
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
