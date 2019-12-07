import React from 'react'
import styled from 'styled-components'

const StyledProject = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  flex-direction: column;
  font-size: 90%;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: white no-repeat center center;
  background-size: cover;
  box-shadow: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)';
  border-radius: 0.5rem;
  color: black;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  * {
    transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .project-cover {
    width: 60%;

    img,
    svg {
      width: 100%;
    }
  }

  > :not(.project-cover) {
    display: none;
  }

  &:hover,
  &:focus {
    transform: translateY(-5px);
    justify-content: flex-start;

    .project-cover {
      transform: scale(0.7);
      pointer-events: none;
    }

    > :not(.project-cover) {
      display: initial;
    }
  }

  @media (max-width: ${({ theme }) => theme.lg}) {
    margin: 2rem 0;
  }
`

const Project = ({ content, cover, ...props }) => (
  <StyledProject tabIndex={0} {...props}>
    <div className="project-cover">{cover}</div>
    {content}
  </StyledProject>
)

export default Project
