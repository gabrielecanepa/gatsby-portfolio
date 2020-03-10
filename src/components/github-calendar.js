import Calendar from 'github-calendar'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import 'github-calendar/dist/github-calendar-responsive.css'
import 'github-calendar/dist/github-calendar.css'

const baseStyle = {
  width: '100%',
}

const GitHubCalendar = ({ username, text = '', responsive = true, showStats = false, Loader, style, ...rest }) => {
  const ref = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const options = useMemo(
    () => ({
      global_stats: showStats,
      responsive,
      summary_text: text,
    }),
    [responsive, showStats, text]
  )

  const enhancedStyle = useMemo(() => ({ ...baseStyle, ...style }), [style])

  useEffect(() => {
    ;(async () => {
      ref.current && (await Calendar(ref.current, username, options))
      setIsLoading(false)
    })()
  }, [options, username])

  return (
    <div ref={ref} style={enhancedStyle} {...rest}>
      {isLoading && (<Loader /> || <p>{'Loading GitHub calendar...'}</p>)}
    </div>
  )
}

export default GitHubCalendar
