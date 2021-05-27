import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Navbar from 'components/nav/Navbar'
import Landing from 'components/main/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TestImpls from 'containers/testpage/TestImpls'
import Sample from 'Sample'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/test'>
            <TestImpls />
          </Route>
          <Route path='/sample'>
            <Sample />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
