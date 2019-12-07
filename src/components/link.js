import React, { useMemo } from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, children, ...props }) => {
  const { target } = props
  const internal = useMemo(() => /^\/(?!\/)/.test(to), [to])
  const rel = useMemo(() => target && 'noopener noreferrer', [target])

  if (internal)
    <GatsbyLink rel={rel} to={to} {...props}>
      {children}
    </GatsbyLink>

  return (
    <a href={to} rel={rel} {...props}>
      {children}
    </a>
  )
}

export default Link
