import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { ViewportProvider } from "./viewport.tsx"
import { BreakpointProvider } from "./breakpoint.tsx"
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

const queries = {
  mobile: "(max-width: 767px)",
  maxTablet: "(max-width: 990px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 922px)",
  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)", // we can check orientation also
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[
        <ThemeProvider theme={theme} />,
        <BreakpointProvider queries={queries} />,
        <ViewportProvider />,
      ]}
    >
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
