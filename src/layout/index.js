import Content from './content'
import Divider from './divider'
import Inner from './inner'
import React, { useCallback, useEffect, useState } from 'react'
import SEO from './seo'
import Style from './style'
import themes from 'themes'

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(0)

  useEffect(() => setTheme(parseInt(localStorage.getItem('theme') || 0)), [])

  const switchTheme = useCallback(async () => {
    const nextTheme = theme >= 0 && theme < themes.length - 1 ? theme + 1 : 0
    await localStorage.setItem('theme', nextTheme)
    setTheme(nextTheme)
  }, [theme])

  return (
    <>
      <SEO />
      <Style theme={themes[theme]}>
        <button className="switch" onClick={switchTheme} style={{ position: 'absolute', zIndex: 1 }} type="button">
          {'Switch'}
        </button>
        {children}
      </Style>
    </>
  )
}

export default Layout
export { Content, Divider, Inner }
