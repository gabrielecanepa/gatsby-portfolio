import React from 'react'
import styled from 'styled-components'
import { Avatar } from 'images'
import { Hero as Bg } from 'backgrounds'
import { Typography } from 'components'
import { useTheme } from 'ext/hooks'

const StyledAvatar = styled(Avatar)`
  width: 10rem;
`

const Hero = ({ offset }) => {
  const { switchTheme } = useTheme()

  return (
    <Bg offset={offset}>
      <StyledAvatar onClick={switchTheme} />
      <Typography variant="subtitle">{"['developer', 'teacher']"}</Typography>
    </Bg>
  )
}

export default Hero
