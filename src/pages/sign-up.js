import React from "react"
import { Link } from "gatsby"
import SignUp from "../components/auth/signUp"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

const SignUpPage = () => (
  <Layout>
    <SEO title="Sign Up" />
    <SignUp />
  </Layout>
)

export default SignUpPage
