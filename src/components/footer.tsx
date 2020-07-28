import React from 'react'
import styled from 'styled-components'
import { useBreakpoint } from '../state/breakpoint'
import { Flex, FlexItem } from './styled/flexBox'
import { UL, LI } from './styled/list'
import { P, NavClickLink } from './styled/type'
import { Twitter, Facebook, StyledIconBase } from '@styled-icons/simple-icons'

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: inherit;
    width: 30px;
    /* icon styles go here */
  }
`

const Wrapper = styled.footer`
  height: 10rem;
  color: ${(props) => props.theme.colors['iceWhite']};
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
                <IconStyleWrapper>
                  <Facebook />
                </IconStyleWrapper>
              </LI>
              <LI>
                <IconStyleWrapper>
                  <Twitter />
                </IconStyleWrapper>
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
