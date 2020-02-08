import React from 'react'
import { Content, Divider, Inner } from 'layout'
import { Svg, UpDownAnimation, UpDownWideAnimation } from 'components'
import { withTheme } from 'styled-components'

const About = ({ offset, theme, children }) => (
  <>
    <Divider
      bg={theme.backgrounds[1]}
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      offset={offset}
      speed={0.2}
    />
    <Divider offset={offset} speed={0.1}>
      <UpDownAnimation>
        <Svg fill={theme.blueDark} icon="sql" left="80%" top="80%" width={24} />
        <Svg fill={theme.blue} icon="do" left="50%" top="75%" width={6} />
        <Svg fill={theme.shapes[0]} hiddenMobile icon="upDown" left="70%" top="20%" width={8} />
        <Svg icon="triangle" left="25%" stroke={theme.shapes[1]} top="5%" width={8} />
      </UpDownAnimation>
      <UpDownWideAnimation>
        <Svg fill={theme.blueDark} icon="docker" left="5%" top="80%" width={16} />
        <Svg fill={theme.shapes[2]} hiddenMobile icon="upDown" left="45%" top="10%" width={8} />
        <Svg icon="triangle" left="95%" stroke={theme.shapes[2]} top="50%" width={12} />
        <Svg fill={theme.shapes[2]} icon="circle" left="85%" top="15%" width={6} />
      </UpDownWideAnimation>
      <Svg fill={theme.purple} hiddenMobile icon="heroku" left="10%" top="10%" width={12} />
      <Svg fill={theme.shapes[0]} icon="circle" left="70%" top="60%" width={12} />
      <Svg fill={theme.shapes[0]} icon="box" left="20%" top="30%" width={12} />
      <Svg icon="hexa" left="80%" stroke={theme.shapes[1]} top="70%" width={8} />
      <Svg fill={theme.shapes[2]} icon="circle" left="4%" top="20%" width={6} />
    </Divider>
    <Content offset={offset} speed={0.4}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default withTheme(About)
