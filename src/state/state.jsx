import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { ViewportProvider, AuthProvider } from "./index"
import theme from "../theme"

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  )
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[
        <ThemeProvider theme={theme} />,
        <ViewportProvider />,
        <AuthProvider />,
      ]}
    >
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
