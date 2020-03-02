import Content from './content'
import Divider from './divider'
import Inner from './inner'
import React from 'react'
import SEO from './seo'
import Style from './style'
import { StoreProvider } from 'ext/hooks/store'

const Layout = ({ children }) => (
  <StoreProvider>
    <SEO />
    <Style>{children}</Style>
  </StoreProvider>
)

export default Layout
export { Content, Divider, Inner }
