import React from 'react'
import styled from 'styled-components'
import { Button, Project } from 'components'
import { LeWagonLogo, leWagonBg } from 'images'

const StyledProject = styled(Project)`
  background-image: url(${leWagonBg});
  color: #161719;

  svg {
    margin: -0.5em 0;
  }
  *::selection {
    background: #fd1015;
    color: white;
  }
`

const LeWagon = () => (
  <StyledProject
    content={
      <>
        <p>
          {
            'I teach at Le Wagon, a Ruby on Rails-focused programming bootcamp based out of 39 cities in 20 countries, and ranked as #1 in the world.'
          }
        </p>
        <Button colors={['#fd1015', 'white']} linkProps={{ to: 'https://www.lewagon.com', target: '_blank' }}>
          {'Learn more'}
        </Button>
      </>
    }
    cover={<LeWagonLogo />}
  />
)

export default LeWagon
