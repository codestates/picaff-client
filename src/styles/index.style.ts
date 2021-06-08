import { createGlobalStyle } from 'styled-components'
import './fonts/fonts.css'
import YGjalnan from './fonts/YGjalnan.ttf'
import NanumSquareRoundR from './fonts/NanumSquareRoundR.ttf'

export const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'YGjalnan';
    src: local('YGjalnan'),
    url(${YGjalnan}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumSquareRoundR';
    src: local('NanumSquareRoundR'),
    url(${NanumSquareRoundR}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }


  * {
    margin: 0;
    box-sizing: border-box;
    background-color: transparent;
    padding: 0;
    font-family: 'YGjalnan';
  }

  html, body, {
    height: 100%;
  }

  h1 {
    font-family: 'YGjalnan';
    letter-spacing: 2px;
    font-size: 1.5rem;
  }

  p {
    font-family: 'YGjalnan';
    letter-spacing: 1px;
    line-height: 1.7rem;
  }

  body html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFEFC;
    font-family: 'NanumSquareRoundR';
  }
`
