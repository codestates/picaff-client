import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Navbar from 'components/nav/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TestImpls from 'containers/testpage/TestImpls'
import ProvideAuth from 'containers/ProvideAuth/ProvideAuth'
import SignUp from 'containers/sign-up/SignUp'
import SignIn from 'containers/login/Login'
import Main from 'containers/main/Main'
import Result from 'containers/result/Result'
import Mypage from 'containers/mypage/Mypage'
import Landing from 'components/main/Landing'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProvideAuth>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/test'>
              <Landing>
                <TestImpls />
              </Landing>
            </Route>
            <Route path='/result'>
              <Result />
            </Route>
            <Route path='/login'>
              <SignIn />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/mypage'>
              <Mypage />
            </Route>
          </Switch>
        </Router>
      </ProvideAuth>
    </ThemeProvider>
  )
}

export default App
