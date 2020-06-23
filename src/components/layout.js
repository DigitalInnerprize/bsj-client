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

import Header from "./header.tsx"
import StickyFooter from "./footer.tsx"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
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
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container component="main" className={classes.main} maxWidth="lg">
          {children}
        </Container>
        <StickyFooter />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
