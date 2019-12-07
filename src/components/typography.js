import React, { useEffect, useMemo, useRef } from 'react'
import Typed from 'typed.js'
import styled from 'styled-components'

const H1 = styled.h1`
  color: ${({ theme }) => theme.texts[0]};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: ${({ theme }) => theme.shadows.text};

  @media (min-width: ${({ theme }) => theme.lg}) {
    font-size: 5.2rem;
  }
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.texts[0]};
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2.25rem;
  letter-spacing: 0.025em;
  margin-bottom: 2rem;
  position: relative;
  text-shadow: ${({ theme }) => theme.shadows.text};
`

const Subtitle = styled.p`
  color: ${({ theme }) => theme.texts[1]};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.8rem;
  margin-top: 2rem;
  text-align: center;
  text-shadow: ${({ theme }) => theme.shadows.text};

  @media (min-width: ${({ theme }) => theme.lg}) {
    font-size: 2rem;
  }
`

const P = styled.p`
  color: ${({ theme }) => theme.texts[0]};
  font-family: ${({ theme }) => theme.fonts.base};
`

const Typography = ({ typed, variant, children, ...rest }) => {
  const ref = useRef(null)
  const props = useMemo(() => ({ children: typed ? <span ref={ref} /> : children, ...rest }), [children, rest, typed])

  useEffect(() => {
    if (typed) {
      new Typed(ref.current, {
        strings: typeof children === 'object' ? children : [children],
        fadeOut: true,
        ...typed,
      })
    }
  }, [children, typed, variant])

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
