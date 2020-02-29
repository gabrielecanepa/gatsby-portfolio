import React from 'react'
import styled from 'styled-components'
import { Avatar } from 'images'
import { Hero as Bg } from 'backgrounds'
import { Typography } from 'components'

const StyledAvatar = styled(Avatar)`
  width: 10rem;
`

const Hero = ({ offset }) => (
  <Bg offset={offset}>
    <StyledAvatar />
    <Typography variant="subtitle">{"= ['developer', 'teacher']"}</Typography>
  </Bg>
)

export default Hero
