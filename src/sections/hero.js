import React from 'react'
import styled from 'styled-components'
import { Avatar } from 'images'
import { Hero as Bg } from 'backgrounds'
import { Typography } from 'components'
import { useTheme } from 'ext/hooks'

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledAvatar = styled(Avatar)`
  width: 10rem;
`

const TitlesContainer = styled.div`
  margin-left: 2rem;
`

const UnderlinedText = styled.span`
  box-shadow: inset 0 -20px 0 0 ${({ theme }) => theme.colors.accent}90;
`

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Hero = ({ offset }) => {
  const { switchTheme } = useTheme()

  return (
    <Bg offset={offset}>
      <FlexContainer>
        <StyledAvatar onClick={switchTheme} title="gabrielecanepa" />
        <TitlesContainer>
          <Typography variant="h1">
            {"Hello, I'm "}
            <UnderlinedText>{'Gabriele'}</UnderlinedText>
          </Typography>
          <Typography variant="subtitle">
            {"I'm a developer and teacher from "}
            <span title="Italy">{'🇮🇹'}</span>{' '}
          </Typography>
        </TitlesContainer>
      </FlexContainer>
      <SocialLinksContainer></SocialLinksContainer>
    </Bg>
  )
}

export default Hero
