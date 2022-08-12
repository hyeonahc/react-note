import GlobalStyle from './styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Button from './components/Button'
// Button 폴더 안에 있는 index.jsx를 찾아 자동으로 import 해주게 된다
// index 파일은 import할때 생략할 수 있다

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button />
    </ThemeProvider>
  )
}

export default App
