import React from 'react'
import styled from 'styled-components'
import { Button, Project } from 'components'
import { FrekklsLogo } from 'images'

const StyledProject = styled(Project)`
  background: linear-gradient(132deg, rgb(255, 132, 62), rgb(255, 108, 64) 52%, rgb(255, 86, 66));
  color: #fff;

  *::selection {
    background: white;
    color: rgb(255, 86, 64);
  }
`

const Frekkls = () => (
  <StyledProject
    content={
      <>
        <p>
          {
            'I develop Frekkls, a smart assistant plugin that integrates AI and human expertise to boost conversions and sales for any kind of products and businesses.'
          }
        </p>
        <Button
          colors={['#ffffff', '#f85f3c']}
          linkProps={{ target: '_blank', to: 'https://frekkls.com' }}
          variant="outline"
        >
          {'Learn more'}
        </Button>
      </>
    }
    cover={<FrekklsLogo />}
  />
)

export default Frekkls
