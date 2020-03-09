import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

const DividerBase = styled(ParallaxLayer)`
  position: absolute;
  width: 100%;
  height: 100%;
  ${({ bg }) => bg && `background: ${bg}`};
  ${({ clipPath }) => clipPath && `clip-path: ${clipPath}`};

  svg {
    fill: ${({ fill }) => fill};
  }
`

const DividerMiddle = styled(DividerBase)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`

const Divider = ({ variant, ...props }) =>
  variant === 'middle' ? <DividerMiddle {...props} /> : <DividerBase {...props} />

export default Divider
