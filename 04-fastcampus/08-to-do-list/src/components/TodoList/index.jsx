import React, { useState, useEffect } from 'react'
import TodoAdd from '../TodoAdd'
import TodoItem from '../TodoItem'
import * as S from './style'

const TodoList = () => {
  const [todoData, setTodoData] = useState([
    { id: 1, date: '2022-08-19', content: 'Go for swimming', checked: false },
  ])

  const checkTodo = (checkedToId) => {
    setTodoData(
      todoData.map((todo) =>
        todo.id === checkedToId ? { ...todo, checked: !todo.checked } : todo,
      ),
    )
  }

  useEffect(() => {
    console.log(todoData)
  }, [todoData])

  return (
    <S.TodoContainer>
      <S.TodoTitle>To Do List</S.TodoTitle>
      <TodoAdd todoData={todoData} setTodoData={setTodoData} />
      {todoData.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          todoData={todoData}
          setTodoData={setTodoData}
          checkTodo={() => checkTodo(todo.id)}
        />
      ))}
    </S.TodoContainer>
  )
}

export default TodoList
