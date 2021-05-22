import ReactDOM from 'react-dom'
import { GlobalStyled } from './styles/index.style'
import App from './App'
import React from 'react'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
