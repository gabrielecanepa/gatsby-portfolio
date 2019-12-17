import Layout from 'layout'
import React from 'react'
import { About, Contact, Hero, Projects } from './sections'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

const Index = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} />
      <Projects offset={1} />
      <About offset={3} />
      <Contact offset={4} />
    </Parallax>
  </Layout>
)

export default Index
