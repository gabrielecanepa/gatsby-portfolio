import React from 'react'
import styled from 'styled-components'
import { icons } from 'images'

const sizes = {
  xs: 2,
  sm: 3,
  md: 4,
  lg: 6,
  xl: 8,
  xxl: 12,
}

const IconBase = styled.svg`
  ${({ top, right, bottom, left }) => (top || right || bottom || left) && 'position: absolute;'}
  ${({ top }) => top && `top: ${top}%;`}
  ${({ right }) => right && `right: ${right}%;`}
  ${({ bottom }) => bottom && `bottom: ${bottom}%;`}
  ${({ left }) => left && `left: ${left}%;`}
  ${({ size }) => size && `width: ${sizes[size]}rem;`}

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    ${({ hiddenMobile }) => hiddenMobile && 'display: none;'}
  }
`

const Icon = ({ hiddenMobile, name, viewBox, ...props }) => (
  <IconBase hiddenMobile={hiddenMobile} viewBox={icons[name] ? icons[name].viewBox : viewBox} {...props}>
    {icons[name] ? icons[name].shape : '?'}
  </IconBase>
)

export default Icon
