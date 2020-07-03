import React from 'react'
import Register from '../components/auth/register'

import Layout from '../components/layout'
import SEO from '../components/seo/seo'

const RegisterPage = () => (
  <Layout>
    <SEO title="Sign Up" />
    <Register />
  </Layout>
)

export default RegisterPage
