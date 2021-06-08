import MainContainer from './Main.style'
import Landing from 'components/main/Landing'
import Recipe from 'containers/recipe/Recipe'
import TopView from 'components/main/TopView'
import Footer from 'components/main/Footer'

export default function Main() {
  return (
    <MainContainer>
      <Landing>
        <TopView />
      </Landing>
      <Recipe />
      <Footer />
    </MainContainer>
  )
}
