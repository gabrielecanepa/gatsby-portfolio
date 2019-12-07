import { createGlobalStyle, withTheme } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    background-color: ${({ theme }) => theme.bg[0]};
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.base};
    overflow: hidden;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: scrollbar;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-y: scroll;
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
  }

  polygon {
    fill: transparent;
  }

  ::selection {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.bg[0]};
  }

  :not(.switch):focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.box};
  }
`

export default withTheme(GlobalStyle)
