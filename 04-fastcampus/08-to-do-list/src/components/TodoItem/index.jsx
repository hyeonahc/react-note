import React from 'react'
import * as S from './style'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
// import { AiOutlineCloseCircle } from 'react-icons/ai'

const TodoItem = ({ todo, todoData, setTodoData, checkTodo }) => {
  const { id, date, content, checked } = todo

  const deleteTodo = (deleteToId) => {
    setTodoData(todoData.filter((todo) => todo.id !== deleteToId))
  }

  return (
    <S.ItemContainer>
      <S.ItemButton onClick={() => checkTodo(id)}>
        {checked ? <GrCheckboxSelected /> : <GrCheckbox />}
      </S.ItemButton>
      <S.ItemText>{date}</S.ItemText>
      <S.ItemText>{content}</S.ItemText>
      <S.ItemButton onClick={() => deleteTodo(id)}>delete</S.ItemButton>
    </S.ItemContainer>
  )
}

export default TodoItem
