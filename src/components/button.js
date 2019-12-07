import Link from './link'
import React from 'react'
import styled from 'styled-components'

const Button = styled(({ linkProps, ...props }) =>
  linkProps ? <Link {...linkProps} {...props} /> : <button type="button" {...props} />
)`
  background: ${({ colors, variant }) => (variant === 'outline' ? 'transparent' : colors[0] || 'white')};
  border: ${({ colors, variant }) => (variant === 'outline' ? `2.5px solid ${colors[0]}` : 'none')};
  border-radius: ${({ borderRadius }) => borderRadius || '10rem'};
  box-shadow: rgba(${({ colors }) => colors[1] || 'black'}, 0.4) 0px 20px 20px;
  color: ${({ colors, variant }) => (variant === 'outline' ? colors[0] : colors[1] || 'black')} !important;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.25;
  margin: 0.5rem auto;
  min-width: 10rem;
  padding: 1.15rem 2.45rem;
  text-align: center;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  z-index: 10;

  &:focus,
  &:hover {
    transform: translateY(-8px);
  }
`

export default Button
