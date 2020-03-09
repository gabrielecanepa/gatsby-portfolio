import React from 'react'
import { Content, Divider, Inner } from 'layout'
import { Icon, UpDownAnimation, UpDownWideAnimation } from 'components'
import { withTheme } from 'styled-components'

const Hero = ({ offset, theme, children }) => (
  <>
    <Divider offset={offset} speed={0.2}>
      <UpDownAnimation>
        <Icon fill={theme.colors.blueLight} left="10" name="react" size="xxl" top="20" />
        <Icon fill={theme.colors.red} hiddenMobile left="40" name="rails" size="xl" top="90" />
        <Icon fill={theme.colors.shapes[1]} hiddenMobile left="40" name="circle" size="lg" top="20" />
        <Icon fill={theme.colors.shapes[1]} left="60" name="box" size="xs" top="15" />
      </UpDownAnimation>
      <UpDownWideAnimation>
        <Icon fill={theme.colors.yellow} left="80" name="js" size="lg" top="10" />
        <Icon fill={theme.colors.shapes[0]} hiddenMobile left="5" name="box" size="xxl" top="90" />
        <Icon fill={theme.colors.shapes[0]} hiddenMobile left="45" name="upDown" size="xs" top="10" />
        <Icon fill={theme.colors.shapes[0]} left="75" name="circle" size="xs" top="10" />
        <Icon left="30" name="triangle" size="md" stroke={theme.colors.shapes[0]} top="65" />
        <Icon left="90" name="triangle" size="sm" stroke={theme.colors.shapes[0]} top="50" />
        <Icon fill={theme.colors.shapes[2]} left="70" name="circle" size="md" top="90" />
        <Icon fill={theme.colors.shapes[2]} hiddenMobile left="28" name="box" size="md" top="15" />
      </UpDownWideAnimation>
      <Icon fill={theme.colors.blueDark} left="5" name="css" size="lg" top="70" />
      <Icon fill={theme.colors.shapes[0]} left="60" name="upDown" size="lg" top="70" />
      <Icon fill={theme.colors.shapes[0]} left="50" name="circle" size="sm" top="60" />
      <Icon fill={theme.colors.shapes[0]} left="95" name="upDown" size="xs" top="90" />
      <Icon fill={theme.colors.shapes[0]} left="4" name="circle" size="xs" top="20" />
      <Icon fill={theme.colors.shapes[1]} left="10" name="box" size="xs" top="10" />
      <Icon fill={theme.colors.shapes[0]} left="95" name="circle" size="xl" top="5" />
      <Icon left="10" name="hexa" size="md" stroke={theme.colors.shapes[2]} top="50" />
      <Icon left="80" name="hexa" size="xs" stroke={theme.colors.shapes[2]} top="70" />
      <Icon left="25" name="triangle" size="xs" stroke={theme.colors.shapes[2]} top="5" />
    </Divider>
    <Content offset={offset} speed={0.4}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default withTheme(Hero)
