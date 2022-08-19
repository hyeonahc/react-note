import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  )
}

export default App
