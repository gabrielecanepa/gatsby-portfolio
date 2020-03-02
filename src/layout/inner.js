import styled from 'styled-components'

const Inner = styled.div`
  width: 100%;
  text-align: ${({ alignCenter }) => (alignCenter ? 'center' : 'left')};

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    text-align: left;
  }
  @media (min-width: ${({ theme }) => theme.screens.xxl}) {
    width: 66.6%;
  }
`

export default Inner
