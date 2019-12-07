import GlobalStyle from 'styles/global'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const Style = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Style
