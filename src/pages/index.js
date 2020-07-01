import React from "react"
import { useQuery } from "@apollo/client"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import ProfileCard from "../components/profileCard"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ProfileCard />
    </Layout>
  )
}

export default IndexPage
