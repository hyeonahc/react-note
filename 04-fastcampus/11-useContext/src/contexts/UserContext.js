import React, { createContext, useReducer } from 'react'
import { userData } from '../constant/userData'
import { userReducer } from '../reducers/userReducer'

export const UserContext = createContext()

export function UserProvider({ children }) {
  // const [state, dispatch] = useReducer(리듀서 이름, 초기 데이터)
  const [state, dispatch] = useReducer(userReducer, userData)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
