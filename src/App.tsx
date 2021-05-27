import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Navbar from 'components/nav/Navbar'
import Landing from 'components/main/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TestImpls from 'containers/testpage/TestImpls'
import Sample from 'Sample'
import ProvideAuth from 'containers/ProvideAuth/ProvideAuth'
import SignUp from 'containers/sign-up/SignUp'
import SignIn from 'containers/login/Login'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProvideAuth>
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
            <Route path='/login'>
              <SignIn />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </ProvideAuth>
    </ThemeProvider>
  )
}

export default App
