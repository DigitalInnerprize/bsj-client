import React from 'react'
import Login from '../components/auth/login'

import Layout from '../components/layout'
import SEO from '../components/seo/seo'

const LoginPage = ({ location }) => {
  const { state: routeState } = location
  const redirect = !routeState ? '/app' : routeState.redirect === 'app' ? '/app' : `/app/${routeState.redirect}`

  return (
    <Layout>
      <SEO title="Login" />
      <Login redirect={redirect} />
    </Layout>
  )
}

export default LoginPage
