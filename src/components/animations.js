import styled from 'styled-components'

export const UpDownAnimation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: ${({ theme }) => theme.upDownAnimation};
`

export const UpDownWideAnimation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: ${({ theme }) => theme.upDownWideAnimation};
`
