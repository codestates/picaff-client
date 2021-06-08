import { createGlobalStyle } from 'styled-components'
import './fonts/fonts.css'

export const GlobalStyled = createGlobalStyle`
  @font-face { 
    font-family: 'yg-jalnan'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff'); 
    font-weight: normal; 
    font-style: normal;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    background-color: transparent;
    padding: 0;
    font-family: 'yg-jalnan';
  }

  html, body {
    width: 100vw;
    height: 100%;
    letter-spacing: 0.53px;
    background: #F7F7F4;
  }

  h1 {
    letter-spacing: 3px;
    line-height: 5rem;
    font-size: 1.5rem;
  }

  p {
    letter-spacing: 1px;
    line-height: 1.7rem;
  }

  body html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFEFC;
  }

  @media (max-width: 425px) {
    h1 {
      letter-spacing: 3px;
      line-height: 3rem;
      font-size: 1rem;
    }
  }
`
