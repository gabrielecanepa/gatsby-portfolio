import Freelance from './freelance'
import Frekkls from './frekkls'
import LeWagon from './lewagon'
import React from 'react'
import UpToUs from './uptous'
import styled from 'styled-components'
import { Projects as Bg } from 'backgrounds'
import { Typography } from 'components'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.screens.xl}) {
    grid-gap: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    grid-gap: 2rem;
    display: block;
  }
`

const Projects = ({ offset, ...props }) => (
  <Bg offset={offset} {...props}>
    <Typography variant="h2">{'what I do:'}</Typography>
    <Wrapper>
      <Frekkls />
      <LeWagon />
      <UpToUs />
      <Freelance />
    </Wrapper>
  </Bg>
)

export default Projects
