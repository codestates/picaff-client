import ReactDOM from 'react-dom'
import { GlobalStyled } from './styles/index.style'
import App from './App'

ReactDOM.render(
  <GlobalStyled>
    <App />
  </GlobalStyled>,
  document.getElementById('root')
)
