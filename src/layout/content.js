import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

const Content = styled(ParallaxLayer)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 1.5rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    padding: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    padding: 4rem;
  }
`

export default Content
