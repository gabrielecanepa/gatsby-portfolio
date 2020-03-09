import React, { useMemo } from 'react'
import { Content, Divider, Inner } from 'layout'
import { Icon, UpDownAnimation, UpDownWideAnimation } from 'components'
import { shadeColor } from 'utils'
import { withTheme } from 'styled-components'

const Projects = ({ offset, theme, children }) => {
  const gradient = useMemo(
    () => `linear-gradient(to right, ${theme.colors.accent} 0%, ${shadeColor(theme.colors.accent, 50)} 100%)`,
    [theme.colors.accent]
  )

  return (
    <>
      <Divider bg={gradient} factor={2} offset={`${offset}.1`} speed={-0.2} variant="middle" />
      <Content factor={2} offset={`${offset}.2`} speed={0.4}>
        <Inner>{children}</Inner>
      </Content>
      <Divider factor={2} offset={offset} speed={0.1}>
        <UpDownAnimation>
          <Icon fill={theme.colors.orangeDark} left="25" name="html" size="md" top="5" />
          <Icon fill={theme.colors.shapes[0]} left="85" name="box" size="xs" top="75" />
          <Icon fill={theme.colors.shapes[1]} hiddenMobile left="17" name="circle" size="lg" top="60" />
          <Icon fill={theme.colors.shapes[2]} left="70" name="upDown" size="xs" top="20" />
        </UpDownAnimation>
        <UpDownWideAnimation>
          <Icon fill={theme.colors.green} left="45" name="vue" size="md" top="10" />
          <Icon fill={theme.colors.black} left="70" name="github" size="lg" top="80" />
          <Icon fill={theme.colors.orange} hiddenMobile left="18" name="git" size="md" top="75" />
          <Icon fill={theme.colors.shapes[0]} left="20" name="circle" size="sm" top="95" />
          <Icon left="90" name="triangle" size="sm" stroke={theme.colors.shapes[1]} top="30" />
          <Icon fill={theme.colors.shapes[1]} left="75" name="circle" size="xs" top="10" />
        </UpDownWideAnimation>
        <Icon fill={theme.colors.blueDarker} left="75" name="native" size="lg" top="30" />
        <Icon fill={theme.colors.greenDark} left="29" name="node" size="lg" top="26" />
        <Icon fill={theme.colors.shapes[0]} left="10" name="arrowUp" size="xs" top="10" />
        <Icon fill={theme.colors.shapes[1]} left="4" name="circle" size="xs" top="20" />
        <Icon fill={theme.colors.shapes[2]} left="80" name="circle" size="sm" top="60" />
      </Divider>
    </>
  )
}

export default withTheme(Projects)
