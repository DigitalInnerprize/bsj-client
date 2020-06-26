import React from "react"
import SignIn from "../components/auth/signIn"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

const SignInPage = () => (
  <Layout>
    <SEO title="Sign In" />
    <SignIn />
  </Layout>
)

export default SignInPage
