import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    background-color: ${({ theme }) => theme.colors.backgrounds[0]};
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.texts[0]};
    font-family: ${({ theme }) => theme.fonts.base};
    overflow: hidden;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: scrollbar;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    overflow-y: scroll;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
  }

  polygon {
    fill: transparent;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.backgrounds[0]};
  }
`
