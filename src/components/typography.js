import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  color: ${({ theme }) => theme.texts[0]};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: ${({ theme }) => theme.textShadow(theme.accent)};
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.texts[0]};
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 2.25rem;
  letter-spacing: 0.025em;
  margin-bottom: 2rem;
  position: relative;
  text-shadow: ${({ theme }) => theme.textShadow(theme.accent)};
`

const Subtitle = styled.p`
  color: ${({ theme }) => theme.texts[1]};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 2.5rem;
  margin-top: 2rem;
  text-align: center;
  text-shadow: ${({ theme }) => theme.textShadow(theme.accent)};
`

const P = styled.p`
  color: ${({ theme }) => theme.texts[0]};
  font-family: ${({ theme }) => theme.fonts.base};
`

const Typography = ({ variant, ...props }) => {
  switch (variant) {
    case 'h1':
      return <H1 {...props} />
    case 'h2':
      return <H2 {...props} />
    case 'subtitle':
      return <Subtitle {...props} />
    default:
      return <P {...props} />
  }
}

export default Typography
