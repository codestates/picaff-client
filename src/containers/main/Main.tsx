import MainContainer from './Main.style'
import Landing from 'components/main/Landing'
import Recipe from 'containers/recipe/Recipe'
import TopView from 'components/main/TopView'

export default function Main() {
  return (
    <MainContainer>
      <Landing>
        <TopView />
      </Landing>
      <Recipe />
    </MainContainer>
  )
}
