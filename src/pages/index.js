import * as React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import Layout from '../components/layout'
import SEO from '../components/seo/seo'
import { H4, P } from '../components/styled/type.tsx'
import { ButtonPrimary, ButtonText } from '../components/styled/button'

const JobPostContainer = styled.div`
  margin-top: 2.5%;
  height: 13.75rem;
`

const JobPost = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.gray9};
  border: 1px solid black;
  height: auto;
  grid-gap: 3rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  place-items: center;
`

const Logo = styled.div`
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  background-color: black;
`

const PostDesc = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <JobPostContainer>
        <JobPost>
          <Logo />
          <PostDesc>
            <H4>Business Title</H4>
            <P marginTop="sm">This is a brief description</P>
          </PostDesc>
          <ButtonPrimary includeButtonText>
            <ButtonText fontWeight="bold">Apply</ButtonText>
          </ButtonPrimary>
        </JobPost>
      </JobPostContainer>
    </Layout>
  )
}

export default IndexPage
