import React from 'react'
import { Hero as Bg } from 'backgrounds'
import { Typography } from 'components'

const Hero = ({ offset }) => (
  <Bg offset={offset}>
    <Typography variant="h1">{"hi, I'm gabriele."}</Typography>
    <Typography typed={{ typeSpeed: 40, startDelay: 1800 }} variant="subtitle">
      {'I create web experiences.'}
    </Typography>
  </Bg>
)

export default Hero
