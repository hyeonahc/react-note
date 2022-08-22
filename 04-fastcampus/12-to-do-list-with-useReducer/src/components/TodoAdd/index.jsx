import React, { useState } from 'react'
import * as S from './style'

const TodoAdd = ({ todoAddHandler }) => {
  const [userInput, setUserInput] = useState({
    date: '',
    content: '',
  })

  const userInputHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  return (
    <S.AddContainer>
      <S.AddInput type="date" name="date" onChange={userInputHandler} />
      <S.AddInput type="text" name="content" onChange={userInputHandler} />
      <S.AddButton onClick={() => todoAddHandler(userInput)}>
        추가하기
      </S.AddButton>
    </S.AddContainer>
  )
}

export default TodoAdd
