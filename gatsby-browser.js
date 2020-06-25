import React from "react"
import { ContextProvider } from "./src/state"
export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
)
