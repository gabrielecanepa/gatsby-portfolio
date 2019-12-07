import React from 'react'
import styled from 'styled-components'
import { About as AboutBg } from 'backgrounds'
import { Avatar } from 'images'
import { Typography } from 'components'

const AboutHero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.lg}) {
    flex-direction: row;
  }
`

const AboutSub = styled.span`
  color: ${({ theme }) => theme.texts[1]};
  font-size: 1.5rem;
  padding-top: 3rem;

  @media (min-width: ${({ theme }) => theme.lg}) {
    font-size: 1.875rem;
    padding-left: 3rem;
    padding-top: 0;
  }
  @media (min-width: ${({ theme }) => theme.xl}) {
    font-size: 2.25rem;
  }
`

const AboutDesc = styled.p`
  color: ${({ theme }) => theme.texts[2]};
  font-size: 1.125rem;
  padding-top: 1.5rem;
  text-align: justify;

  @media (min-width: ${({ theme }) => theme.md}) {
    font-size: 1.25rem;
    padding-top: 3rem;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    font-size: 1.5rem;
  }
`

const About = ({ offset }) => (
  <AboutBg offset={offset}>
    <Typography variant="h2">{'about me:'}</Typography>
    <AboutHero>
      <Avatar width="20%" />
      <AboutSub>
        {
          "The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating Emoji into my speech to better express myself. Winky face."
        }
      </AboutSub>
    </AboutHero>
    <AboutDesc>
      {
        "You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all right?"
      }
    </AboutDesc>
  </AboutBg>
)

export default About
