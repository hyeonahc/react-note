import React, { useState, useRef } from 'react'
import * as S from './style'

const TodoAdd = ({ todoData, setTodoData }) => {
  const [inputValue, setInputValue] = useState({
    date: '',
    content: '',
    checked: false,
  })

  const updateInputValue = (e) => {
    const { value, name } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }

  const id = useRef(2)

  const addTodoList = () => {
    setTodoData([...todoData, { id: id.current, ...inputValue }])
    id.current += 1
  }

  return (
    <S.AddContainer>
      <S.AddInput type="date" name="date" onChange={updateInputValue} />
      <S.AddInput
        type="text"
        name="content"
        placeholder="Write to do list here..."
        onChange={updateInputValue}
      />
      <S.AddButton onClick={addTodoList}>Add</S.AddButton>
    </S.AddContainer>
  )
}

export default TodoAdd
