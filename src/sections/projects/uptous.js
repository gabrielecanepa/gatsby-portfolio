import React from 'react'
import styled from 'styled-components'
import { Button, Project } from 'components'
import { upToUsLogo } from 'images'

const StyledProject = styled(Project)`
  background: #fff;
  color: #193b50;

  *::selection {
    background: #12e4bf;
    color: white;
  }
`

const Freelance = () => (
  <StyledProject
    content={
      <>
        <p>
          {
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero esse eaque rerum non harum repellat consequuntur fuga vero vitae. Minima odio aut optio doloribus expedita'
          }
        </p>
        <Button colors={['#193b50', 'white']} linkProps={{ to: 'https://uptous.co', target: '_blank' }}>
          {'Learn more'}
        </Button>
      </>
    }
    cover={<img alt="UpToUs" src={upToUsLogo} />}
  />
)

export default Freelance
