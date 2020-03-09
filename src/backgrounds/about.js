import React from 'react'
import { Content, Divider, Inner } from 'layout'
import { Icon, UpDownAnimation, UpDownWideAnimation } from 'components'
import { withTheme } from 'styled-components'

const About = ({ offset, theme, children }) => (
  <>
    <Divider
      bg={theme.colors.backgrounds[1]}
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      offset={offset}
      speed={0.2}
    />
    <Divider offset={offset} speed={0.1}>
      <UpDownAnimation>
        <Icon fill={theme.colors.blueDark} left="80" name="sql" size="lg" top="80" />
        <Icon fill={theme.colors.blue} left="50" name="do" size="xs" top="75" />
        <Icon fill={theme.colors.shapes[0]} hiddenMobile left="70" name="upDown" size="xs" top="20" />
        <Icon left="25" name="triangle" size="xs" stroke={theme.colors.shapes[1]} top="5" />
      </UpDownAnimation>
      <UpDownWideAnimation>
        <Icon fill={theme.colors.blueDark} left="5" name="docker" size="md" top="80" />
        <Icon fill={theme.colors.shapes[2]} hiddenMobile left="45" name="upDown" size="xs" top="10" />
        <Icon left="95" name="triangle" size="sm" stroke={theme.colors.shapes[2]} top="50" />
        <Icon fill={theme.colors.shapes[2]} left="85" name="circle" size="xs" top="15" />
      </UpDownWideAnimation>
      <Icon fill={theme.colors.purple} hiddenMobile left="10" name="heroku" size="sm" top="10" />
      <Icon fill={theme.colors.shapes[0]} left="70" name="circle" size="sm" top="60" />
      <Icon fill={theme.colors.shapes[0]} left="20" name="box" size="sm" top="30" />
      <Icon left="80" name="hexa" size="xs" stroke={theme.colors.shapes[1]} top="70" />
      <Icon fill={theme.colors.shapes[2]} left="4" name="circle" size="xs" top="20" />
    </Divider>
    <Content offset={offset} speed={0.4}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default withTheme(About)
