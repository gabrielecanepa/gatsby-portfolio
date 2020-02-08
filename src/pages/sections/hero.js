import React from 'react'
import { Hero as Bg } from 'backgrounds'
import { Typography } from 'components'

const Hero = ({ offset }) => (
  <Bg offset={offset}>
    <Typography variant="h1">{'gabriele canepa'}</Typography>
    <Typography variant="subtitle">{'{ developer & teacher }'}</Typography>
  </Bg>
)

export default Hero
