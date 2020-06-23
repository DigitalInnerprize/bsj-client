import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import ProfileCard from "../components/profileCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileCard />
  </Layout>
)

export default IndexPage
