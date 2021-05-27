import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    background-color: transparent;

  }
  html, body, #root {
  height: 100%
}

  body html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFEFC;
    
  }
`
