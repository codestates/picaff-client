import { BrowserRouter as Router } from 'react-router-dom'
import MainContainer from './Main.style'
import Landing from 'components/main/Landing'
import Magazine from 'components/main/Magazine'

export default function Main() {
  return (
    <Router>
      <MainContainer>
        <Landing />
        <Magazine />
      </MainContainer>
    </Router>
  )
}
