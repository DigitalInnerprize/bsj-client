/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Navbar from './styled/navbar/navbar.tsx'
import Footer from './footer.tsx'
import { GlobalStyle } from './globalStyle'
import { Container, ContentContainer } from './styled/container'
import { Ad } from './ad'

const LayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [open, setOpen] = React.useState(false)

  const handleNavBar = () => {
    setOpen(!open)
  }

  return (
    <LayoutContainer>
      <GlobalStyle />
      <Navbar siteTitle={data.site.siteMetadata.title} navBarState={open} handleNavBar={handleNavBar} />
      <main>
        <ContentContainer>
          <Ad />
          {children}
          <Ad />
        </ContentContainer>
      </main>
      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
