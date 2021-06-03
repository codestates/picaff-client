import ReactDOM from 'react-dom'
import { GlobalStyled } from './styles/index.style'
import App from './App'
import React from 'react'
import { LoadScript } from '@react-google-maps/api'

ReactDOM.render(
  <React.StrictMode>
    <LoadScript
      mapIds={['ae2e13f24821623f']}
      googleMapsClientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY as string}
    />
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
