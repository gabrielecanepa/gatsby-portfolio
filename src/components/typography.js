import React from 'react'
import styled, { css } from 'styled-components'

const baseHeadingStyle = css`
  font-family: ${({ theme }) => theme.fonts.title};
  text-shadow: ${({ theme }) => theme.shadows.text(theme.colors.accent)};
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.texts[0]};
  font-size: 3.6rem;
  margin: 1.2rem 0;
  ${baseHeadingStyle}
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.texts[1]};
  font-size: 2.2rem;
  letter-spacing: 0.025em;
  margin-bottom: 1rem 0;
  ${baseHeadingStyle}
`

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.texts[2]};
  font-size: 1.8rem;
  margin: 0.8rem 0;
  ${baseHeadingStyle}
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
      return <p {...props} />
  }
}

export default Typography
