import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useTheme } from 'ext/hooks'

const Style = ({ children }) => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <theme.global />
      {children}
    </ThemeProvider>
  )
}

export default Style
