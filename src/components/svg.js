import React from 'react'
import styled from 'styled-components'
import { icons } from 'images'

const SvgBase = styled.svg`
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  width: ${({ width }) => width / 4}rem;
  ${({ absolute }) => absolute && 'position: absolute;'}
  ${({ fill }) => fill && `fill: ${fill};`}
  ${({ stroke }) => stroke && `stroke: ${stroke};`}


  @media (max-width: ${({ theme }) => theme.screens.md}) {
    ${({ hiddenMobile }) => hiddenMobile && 'display: none;'}
  }
`

const Svg = ({ absolute = true, fill, hiddenMobile, icon, left, stroke, top, viewBox, width, ...props }) => (
  <SvgBase
    absolute={absolute}
    fill={fill}
    hiddenMobile={hiddenMobile}
    left={left}
    stroke={stroke}
    top={top}
    viewBox={icons[icon] ? icons[icon].viewBox : viewBox}
    width={width}
    {...props}
  >
    {icons[icon] ? icons[icon].shape : '?'}
  </SvgBase>
)

export default Svg
