import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

const Content = styled(ParallaxLayer)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  padding: 1.5rem;

  @media (min-width: ${({ theme }) => theme.md}) {
    padding: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    padding: 4rem;
  }
`

export default Content
