import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import { media } from '../../../utils/mediaQueries.ts'

import Burger from './burger'
import Menu from './menu'
import { NavLink } from '../type'

type Props = {
  handleNavBar?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void
  navBarState: boolean
}

const Navbar: React.FC<Props> = ({ navBarState, handleNavBar }) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  })

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <StyledDiv style={linkAnimation}>
            <NavLink size="logo" to="/" color="white">
              Behind Scene Jobs
            </NavLink>
          </StyledDiv>
          <NavLinksUl style={linkAnimation}>
            <a href="/">Post a Job</a>
            <a href="/">View Jobs</a>
          </NavLinksUl>
          <BurgerWrapper>
            <Burger navBarState={navBarState} handleNavBar={handleNavBar} />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <Menu navBarState={navBarState} handleNavBar={handleNavBar} />
    </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  background: ${(props) => props.theme.colors['lightBlue']};
  z-index: 1;
`

const FlexContainer = styled.div`
  max-width: 130rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
`

const StyledDiv = styled(animated.div)``

const NavLinksUl = styled(animated.ul)`
  display: none;

  ${media.tablet} {
    display: flex;
    list-style-type: none;

    & a {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;
      font-weight: 600;
      border-bottom: 1px solid transparent;
      margin: 0 1.5rem;
      transition: all 300ms linear 0s;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.white};
        border-bottom: 1px solid ${({ theme }) => theme.colors.premiumHover};
      }
    }
  }
`

const BurgerWrapper = styled.div`
  display: none;

  ${media.maxPhone} {
    display: block;
    flex-direction: column;
    margin: auto 0;
  }
`
