import Content from './content'
import Divider from './divider'
import Inner from './inner'
import React from 'react'
import SEO from './seo'
import Style from './style'

const Layout = ({ children }) => (
  <>
    <SEO />
    <Style>{children}</Style>
  </>
)

export default Layout
export { Content, Divider, Inner }
