import React from 'react'
import { Content, Divider, Inner } from 'layout'
import { Svg, UpDownAnimation, UpDownWideAnimation } from 'components'
import { shadeColor } from 'utils'
import { withTheme } from 'styled-components'

const Projects = ({ offset, theme, children }) => (
  <>
    <Divider
      bg={`linear-gradient(to right, ${theme.accent} 0%, ${shadeColor(theme.accent, 50)} 100%)`}
      factor={2}
      offset={`${offset}.1`}
      speed={-0.2}
      variant="middle"
    />
    <Content factor={2} offset={`${offset}.2`} speed={0.4}>
      <Inner>{children}</Inner>
    </Content>
    <Divider factor={2} offset={offset} speed={0.1}>
      <UpDownAnimation>
        <Svg fill={theme.orangeDark} icon="html" left="25%" top="5%" width={16} />
        <Svg fill={theme.shapes[0]} icon="box" left="85%" top="75%" width={6} />
        <Svg fill={theme.shapes[1]} hiddenMobile icon="circle" left="17%" top="60%" width={24} />
        <Svg fill={theme.shapes[2]} icon="upDown" left="70%" top="20%" width={8} />
      </UpDownAnimation>
      <UpDownWideAnimation>
        <Svg fill={theme.green} icon="vue" left="45%" top="10%" width={16} />
        <Svg fill={theme.black} icon="github" left="70%" top="80%" width={20} />
        <Svg fill={theme.orange} hiddenMobile icon="git" left="18%" top="75%" width={16} />
        <Svg fill={theme.shapes[0]} icon="circle" left="20%" top="95%" width={12} />
        <Svg icon="triangle" left="90%" stroke={theme.shapes[1]} top="30%" width={12} />
        <Svg fill={theme.shapes[1]} icon="circle" left="75%" top="10%" width={6} />
      </UpDownWideAnimation>
      <Svg fill={theme.blueDarker} icon="native" left="75%" top="30%" width={20} />
      <Svg fill={theme.greenDark} icon="node" left="29%" top="26%" width={20} />
      <Svg fill={theme.shapes[0]} icon="arrowUp" left="10%" top="10%" width={6} />
      <Svg fill={theme.shapes[1]} icon="circle" left="4%" top="20%" width={6} />
      <Svg fill={theme.shapes[2]} icon="circle" left="80%" top="60%" width={12} />
    </Divider>
  </>
)

export default withTheme(Projects)
