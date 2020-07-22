import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { ViewportProvider, BreakpointProvider } from './index'
import fetch from 'isomorphic-fetch'
import theme from '../theme'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    fetch,
    uri: `${process.env.GATSBY_API_URL}/graphql`,
  }),
})

const ProviderComposer = ({ contexts, children }) => {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children,
  )
}

const ContextProvider = ({ children }) => {
  const queries = {
    mobile: '(max-width: 767px)',
    maxTablet: '(max-width: 990px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 922px)',
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)', // we can check orientation also
  }

  return (
    <ProviderComposer
      contexts={[
        <ApolloProvider client={client} />,
        <ThemeProvider theme={theme} />,
        <ViewportProvider />,
        <BreakpointProvider queries={queries} />,
      ]}
    >
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
