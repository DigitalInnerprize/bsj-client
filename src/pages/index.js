import * as React from "react"
import { navigate } from "gatsby"
import { useQuery } from "@apollo/client"
import { GET_PROFILES } from "../gql/queries"
import { useAuth } from "../state"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import ProfileCard from "../components/profileCard"

const IndexPage = () => {
  const { isAuthenticated } = useAuth()
  const { loading, error, data } = useQuery(GET_PROFILES)
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/app")
    }
  }, [isAuthenticated])
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`
  console.log("data =", data)

  return (
    <Layout>
      <SEO title="Home" />
      <ProfileCard />
    </Layout>
  )
}

export default IndexPage
