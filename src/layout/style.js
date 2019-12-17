import React from 'react'
import { ThemeProvider } from 'styled-components'

const Style = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <theme.GlobalStyle theme={theme} />
    {children}
  </ThemeProvider>
)

export default Style
