import React from 'react'
import styled from 'styled-components'

import { useSpring, animated } from 'react-spring'

type Props = {
  handleNavBar?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  navBarState: boolean
}

const CollapseMenu: React.FC<Props> = ({ navBarState, handleNavBar }) => {
  const { open } = useSpring({ open: navBarState ? 0 : 1 })

  if (navBarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <a href="/" onClick={handleNavBar}>
              Post a Job
            </a>
          </li>
          <li>
            <a href="/" onClick={handleNavBar}>
              View Jobs
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.8rem;
    line-height: 2;
    color: ${({ theme }) => theme.colors.premium};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.premiumHover};
      border-bottom: 1px solid ${({ theme }) => theme.colors.premiumHover};
    }
  }
`
