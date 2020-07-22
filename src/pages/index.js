import * as React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PROFILES } from '../gql/queries'
import Layout from '../components/layout'
import SEO from '../components/seo/seo'

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_PROFILES)
  if (loading) return 'Loading...'
  console.log('data =', data)

  return (
    <Layout>
      <SEO title="Home" />
      Hello this is the home page
    </Layout>
  )
}

export default IndexPage
