import { createGlobalStyle } from 'styled-components'
import './fonts/fonts.css'

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    background-color: transparent;
    padding: 0;
  }

  html, body, {
    height: 100%
  }

  h1 {
    font-family: 'Gamja Flower';
    letter-spacing: 2px;
    font-size: 1.5rem;
  }

  p {
    font-family: 'Nanum Myeongjo';
    letter-spacing: 1px;
    line-height: 1.7rem;
  }

  body html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFEFC;
    font-family: 'Noto Sans KR', sans-serif, 'Nanum Gothic', 'Nanum Myeongjo', 'Nanum Pen Script';
  }
`
