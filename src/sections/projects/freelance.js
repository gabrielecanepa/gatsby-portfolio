import React from 'react'
import styled from 'styled-components'
import { GitHubCalendar, Project } from 'components'

const StyledProject = styled(Project)`
  background: #161719;
  color: #fff;
`

const Freelance = () => (
  <StyledProject content={<GitHubCalendar username="gabrielecanepa" />} cover={<h1>{'Freelance'}</h1>} />
)

export default Freelance
