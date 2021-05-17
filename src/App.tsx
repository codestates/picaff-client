import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Sample from './Sample'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sample />
    </ThemeProvider>
  )
}

export default App
