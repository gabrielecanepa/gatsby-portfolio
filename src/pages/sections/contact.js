import React from 'react'
import styled from 'styled-components'
import { Contact as ContactBg } from 'backgrounds'
import { Inner } from 'layout'
import { Link, Svg, Typography } from 'components'

const ContactText = styled.p`
  color: ${({ theme }) => theme.texts[1]};
  font-size: 1.25rem;

  @media (min-width: ${({ theme }) => theme.md}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    font-size: 1.875rem;
  }
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.bg[0]};
  font-size: 0.9rem;
  padding: 1.5rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.lg}) {
    font-size: 1.125rem;
  }
`

const GatsbyIcon = styled(props => (
  <Link target="_blank" to="https://www.gatsbyjs.org" {...props}>
    <Svg absolute={false} icon="gatsby" width={5} />
  </Link>
))`
  display: flex;
  align-items: center;
  fill: ${({ theme }) => theme.purpleDark};
  margin: 0 0.3rem;
`

const GitHubLink = styled(props => (
  <Link target="_blank" to="https://github.com/gabrielecanepa/gatsby-portfolio#tools" {...props}>
    {' other amazing tools'}
  </Link>
))`
  color: ${({ theme }) => theme.bg[0]};
  box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.bg[0]}40;
  font-size: 1.05rem;
  margin-left: 0.3rem;
`

const Contact = ({ offset }) => (
  <ContactBg offset={offset}>
    <Inner>
      <Typography variant="h2">{"let's build something together"}</Typography>
      <ContactText>
        {'Say '}
        <a href="mailto:hello@gabrielecanepa.com">{'hi'}</a>
        {' or find me on other platforms: '}
        <a href="https://github.com/gabrielecanepa" rel="noopener noreferrer" target="_blank">
          {'GitHub'}
        </a>
        {' and '}
        <a href="https://linkedin.com/in/gabrielecanepa" rel="noopener noreferrer" target="_blank">
          {'LinkedIn'}
        </a>
        {'.'}
      </ContactText>
    </Inner>
    <Footer>
      {`© 2017 - ${new Date().getFullYear()}, with `}
      {', with '}
      <GatsbyIcon />
      {' and'}
      <GitHubLink />
      {'.'}
    </Footer>
  </ContactBg>
)

export default Contact
