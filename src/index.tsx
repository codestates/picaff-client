import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyled } from './styles/index.style'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled>
      <App />
    </GlobalStyled>
  </React.StrictMode>,
  document.getElementById('root')
)
