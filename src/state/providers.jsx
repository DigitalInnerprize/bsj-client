import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/link-context'
import Cookies from 'js-cookie'
import { ThemeProvider } from '@material-ui/core/styles'
import { ViewportProvider, AuthProvider } from './index'
import fetch from 'isomorphic-fetch'
import theme from '../theme'

const httpLink = createHttpLink({
  fetch,
  uri: `${process.env.GATSBY_API_URL}/graphql`,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from cookie storage if it exists
  const token = Cookies.get('jwt')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  credentials: 'include',
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
  return (
    <ProviderComposer contexts={[<ApolloProvider client={client} />, <AuthProvider />, <ViewportProvider />]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ProviderComposer>
  )
}

export { ContextProvider }
