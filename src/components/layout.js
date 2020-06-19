/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

import Header from "./header"
import StickyFooter from "./footer"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },
}))

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

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
      <StickyFooter />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
