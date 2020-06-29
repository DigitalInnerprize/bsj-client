import React from "react"
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client"
import { ThemeProvider } from "@material-ui/core/styles"
import { ViewportProvider, AuthProvider } from "./index"
import fetch from "isomorphic-fetch"
import theme from "../theme"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    fetch,
    uri: process.env.GATSBY_API_URL,
  }),
})

const ProviderComposer = ({ contexts, children }) => {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  )
}

const ContextProvider = ({ children }) => {
  return (
    <ProviderComposer
      contexts={[
        <ApolloProvider client={client} />,
        <ViewportProvider />,
        <AuthProvider />,
      ]}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ProviderComposer>
  )
}

export { ContextProvider }
