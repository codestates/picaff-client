import MainContainer from './Main.style'
import Landing from 'components/main/Landing'
import Recipe from 'containers/recipe/Recipe'

export default function Main() {
  return (
    <MainContainer>
      <Landing />
      <Recipe />
    </MainContainer>
  )
}
