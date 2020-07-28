import * as React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import Layout from '../components/layout'
import SEO from '../components/seo/seo'
import { H3 } from '../components/styled/type.tsx'
import { ButtonPrimary, ButtonText } from '../components/styled/button'

const JobPostContainer = styled.div`
  margin-top: 2.5%;
  height: 13.75rem;
`

const JobPost = styled.div`
  margin-top: 2.5%;
  height: 13.75rem;
  padding: 0 1rem;
  border: 3px solid #1f364d;
  grid-gap: 3rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  place-items: center;
`

const Logo = styled.div`
  padding: 1rem;
  width: 5rem;
  height: 5rem;
  background-color: black;
`

const PostDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <JobPost>
        <Logo />
        <PostDesc>
          <H3 fontWeight="bold" marginTop="sm" themeColor="white">
            Business Title
          </H3>
        </PostDesc>
        <ButtonPrimary includeButtonText>
          <ButtonText fontWeight="bold">Apply</ButtonText>
        </ButtonPrimary>
      </JobPost>
    </Layout>
  )
}

export default IndexPage
