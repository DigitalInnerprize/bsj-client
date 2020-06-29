import React from "react"
import Login from "../components/auth/login"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <Login />
  </Layout>
)

export default LoginPage
