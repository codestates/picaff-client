import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Sample from './Sample'
import Navbar from 'components/nav/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Sample />
    </ThemeProvider>
  )
}

export default App
