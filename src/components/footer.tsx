import React from 'react'
import styled from 'styled-components'
import { useBreakpoint } from '../state/breakpoint'
import { Flex, FlexItem } from './styled/flexBox'
import { UL, LI } from './styled/list'
import { P, NavClickLink } from './styled/type'

const Wrapper = styled.footer`
  height: 10rem;
  background: ${(props) => props.theme.colors['lightBlue']};
  color: #f8f8fb;
  display: grid;
  place-items: center;
`

const Footer = () => {
  const d = new Date()
  const year = d.getFullYear()
  const breakpoint = useBreakpoint()

  return (
    <Wrapper>
      <>
        <Flex column spaceEvenly>
          <FlexItem>
            <UL center>
              <LI>
                <NavClickLink marginBottom="sm2" href="#">
                  facebook
                </NavClickLink>
              </LI>
              <LI>
                <NavClickLink marginBottom="sm2" href="#">
                  instagram
                </NavClickLink>
              </LI>
            </UL>
          </FlexItem>
          <FlexItem>
            <P size="sm" marginBottom={breakpoint.tablet && '0'}>
              Copyright &copy; {year} Digital Innerprize llc. All rights reserved.
            </P>
          </FlexItem>
        </Flex>
      </>
    </Wrapper>
  )
}

export default Footer
