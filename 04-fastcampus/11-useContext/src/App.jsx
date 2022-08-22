import React from 'react'
import { UserProvider } from './contexts/UserContext'
import UserList from './components/UserList'

const App = () => {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  )
}

export default App
