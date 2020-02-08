import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Content, Divider } from 'layout'
import { Svg, UpDownAnimation, UpDownWideAnimation } from 'components'

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
    ${({ theme }) => theme.waveAnimation('20s')};
  }
`

const Wave = () => (
  <WaveWrapper>
    <WaveInner>
      <svg preserveAspectRatio="none" viewBox="0 0 800 338.05" xmlns="http://www.w3.org/2000/svg">
        <path>
          <animate
            attributeName="d"
            dur="30s"
            repeatCount="indefinite"
            values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
          />
        </path>
      </svg>
    </WaveInner>
  </WaveWrapper>
)

const Contact = ({ offset, theme, children }) => (
  <>
    <Divider fill={theme.accent} offset={offset} speed={0.2}>
      <Wave />
    </Divider>
    <Content offset={offset} speed={0.4}>
      {children}
    </Content>
    <Divider offset={offset} speed={0.1}>
      <UpDownAnimation>
        <Svg fill={theme.shapes[0]} hiddenMobile icon="upDown" left="70%" top="20%" width={8} />
        <Svg icon="triangle" left="25%" stroke={theme.shapes[2]} top="5%" width={8} />
      </UpDownAnimation>
      <UpDownWideAnimation>
        <Svg fill={theme.shapes[0]} hiddenMobile icon="upDown" left="45%" top="10%" width={8} />
        <Svg icon="triangle" left="95%" stroke={theme.shapes[1]} top="50%" width={12} />
        <Svg fill={theme.shapes[1]} icon="circle" left="85%" top="15%" width={6} />
      </UpDownWideAnimation>
      <Svg fill={theme.shapes[0]} icon="circle" left="70%" top="60%" width={12} />
      <Svg fill={theme.shapes[0]} icon="box" left="20%" top="30%" width={12} />
      <Svg icon="hexa" left="80%" stroke={theme.shapes[1]} top="70%" width={8} />
      <Svg fill={theme.shapes[2]} icon="circle" left="4%" top="20%" width={6} />
    </Divider>
  </>
)

export default withTheme(Contact)
