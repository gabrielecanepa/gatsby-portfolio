import React from 'react'
import styled from 'styled-components'
import { Avatar } from 'images'
import { About as Bg } from 'backgrounds'
import { Typography } from 'components'

const Hero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: row;
  }
`

const Subtitle = styled.span`
  color: ${({ theme }) => theme.foregrounds[1]};
  font-size: 1.5rem;
  padding-top: 3rem;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.875rem;
    padding-left: 3rem;
    padding-top: 0;
  }
  @media (min-width: ${({ theme }) => theme.screens.xl}) {
    font-size: 2.25rem;
  }
`

const Description = styled.p`
  color: ${({ theme }) => theme.foregrounds[2]};
  font-size: 1.125rem;
  padding-top: 1.5rem;
  text-align: justify;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    font-size: 1.25rem;
    padding-top: 3rem;
  }
  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.5rem;
  }
`

const About = ({ offset }) => (
  <Bg offset={offset}>
    <Typography variant="h2">{'about me:'}</Typography>
    <Hero>
      <Avatar width="20%" />
      <Subtitle>
        {
          "The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating Emoji into my speech to better express myself. Winky face."
        }
      </Subtitle>
    </Hero>
    <Description>
      {
        "You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all right?"
      }
    </Description>
  </Bg>
)

export default About
