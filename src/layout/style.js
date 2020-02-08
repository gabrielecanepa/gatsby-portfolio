import React from 'react'
import { ThemeProvider } from 'styled-components'

const Style = ({ theme, children }) => {
  const { GlobalStyle } = theme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Style
