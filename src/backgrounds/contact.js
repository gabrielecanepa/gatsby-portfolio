import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Content, Divider } from 'layout'
import { Icon, UpDownAnimation, UpDownWideAnimation } from 'components'

const WaveWrapper = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  transform: matrix(1, 0, 0, -1, 0, 0);
`

const WaveInner = styled.div`
  position: relative;
  height: 100%;

  svg {
    width: 100%;
    height: 40vh;
  }
  path {
    ${({ theme }) => theme.animations.wave};
  }
`

const Contact = ({ offset, theme, children }) => (
  <>
    <Divider fill={theme.colors.accent} offset={offset} speed={0.2}>
      <WaveWrapper>
        <WaveInner>
          <Icon name="wave" preserveAspectRatio="none" />
        </WaveInner>
      </WaveWrapper>
    </Divider>
    <Content offset={offset} speed={0.4}>
      {children}
    </Content>
    <Divider offset={offset} speed={0.1}>
      <UpDownAnimation>
        <Icon fill={theme.colors.shapes[0]} hiddenMobile left="70" name="upDown" size="xs" top="20" />
        <Icon left="25" name="triangle" size="xs" stroke={theme.colors.shapes[2]} top="5" />
      </UpDownAnimation>
      <UpDownWideAnimation>
        <Icon fill={theme.colors.shapes[0]} hiddenMobile left="45" name="upDown" size="xs" top="10" />
        <Icon left="95" name="triangle" size="sm" stroke={theme.colors.shapes[1]} top="50" />
        <Icon fill={theme.colors.shapes[1]} left="85" name="circle" size="xs" top="15" />
      </UpDownWideAnimation>
      <Icon fill={theme.colors.shapes[0]} left="70" name="circle" size="sm" top="60" />
      <Icon fill={theme.colors.shapes[0]} left="20" name="box" size="sm" top="30" />
      <Icon left="80" name="hexa" size="xs" stroke={theme.colors.shapes[1]} top="70" />
      <Icon fill={theme.colors.shapes[2]} left="4" name="circle" size="xs" top="20" />
    </Divider>
  </>
)

export default withTheme(Contact)
