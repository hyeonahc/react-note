import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../contexts/UserContext'

const UserList = () => {
  const [userInput, setUserInput] = useState({
    id: '',
    name: '',
    email: '',
  })

  const userInputHandler = (e) => {
    const { name, value } = e.target
    setUserInput({
      ...userInput,
      [name]: value,
    })
  }

  const userId = useRef(11)

  const { state, dispatch } = useContext(UserContext)

  const addUser = (userInput) => {
    dispatch({
      type: 'ADD',
      data: { ...userInput, id: userId.current },
    })
    userId.current += 1
  }

  const removeUser = (userId) => {
    dispatch({
      type: 'REMOVE',
      data: { id: userId },
    })
  }

  return (
    <>
      <div>
        {state.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <button onClick={() => removeUser(user.id)}>제거하기</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={userInputHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={userInputHandler}
      />
      <button onClick={() => addUser(userInput)}>이름 추가</button>
    </>
  )
}

export default UserList
