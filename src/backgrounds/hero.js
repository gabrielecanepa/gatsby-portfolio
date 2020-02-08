import React from 'react'
import { Content, Divider, Inner } from 'layout'
import { Svg, UpDownAnimation, UpDownWideAnimation } from 'components'
import { withTheme } from 'styled-components'

const Hero = ({ offset, theme, children }) => (
  <>
    <Divider offset={offset} speed={0.2}>
      <UpDownAnimation>
        <Svg fill={theme.blueLight} icon="react" left="10%" top="20%" width={48} />
        <Svg fill={theme.red} hiddenMobile icon="rails" left="40%" top="90%" width={32} />
        <Svg fill={theme.shapes[1]} icon="box" left="60%" top="15%" width={6} />
      </UpDownAnimation>
      <UpDownWideAnimation>
        <Svg fill={theme.blueDark} icon="css" left="80%" top="10%" width={22} />
        <Svg fill={theme.yellow} icon="js" left="40%" top="20%" width={24} />
        <Svg fill={theme.shapes[0]} hiddenMobile icon="box" left="5%" top="90%" width={48} />
        <Svg fill={theme.shapes[0]} hiddenMobile icon="upDown" left="45%" top="10%" width={8} />
        <Svg fill={theme.shapes[0]} icon="circle" left="75%" top="10%" width={6} />
        <Svg icon="triangle" left="30%" stroke={theme.shapes[0]} top="65%" width={16} />
        <Svg icon="triangle" left="90%" stroke={theme.shapes[0]} top="50%" width={12} />
        <Svg fill={theme.shapes[2]} icon="circle" left="70%" top="90%" width={16} />
        <Svg fill={theme.shapes[2]} hiddenMobile icon="box" left="28%" top="15%" width={16} />
      </UpDownWideAnimation>
      <Svg fill={theme.shapes[0]} icon="upDown" left="60%" top="70%" width={24} />
      <Svg fill={theme.shapes[0]} icon="circle" left="50%" top="60%" width={12} />
      <Svg fill={theme.shapes[0]} icon="upDown" left="95%" top="90%" width={8} />
      <Svg fill={theme.shapes[0]} icon="circle" left="4%" top="20%" width={6} />
      <Svg fill={theme.shapes[1]} icon="box" left="10%" top="10%" width={8} />
      <Svg fill={theme.shapes[1]} hiddenMobile icon="circle" left="5%" top="70%" width={24} />
      <Svg fill={theme.shapes[0]} icon="circle" left="95%" top="5%" width={32} />
      <Svg icon="hexa" left="10%" stroke={theme.shapes[2]} top="50%" width={16} />
      <Svg icon="hexa" left="80%" stroke={theme.shapes[2]} top="70%" width={8} />
      <Svg icon="triangle" left="25%" stroke={theme.shapes[2]} top="5%" width={8} />
    </Divider>
    <Content offset={offset} speed={0.4}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default withTheme(Hero)
