import * as React from "react"
import { window } from "browser-monads"
import createCtx from "../utils/createCtx"

interface ContextState {
  width: number | null
  height: number | null
}

export const [useViewportCtx, ViewportCtxProvider] = createCtx<ContextState>()

export const ViewportProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  // This is the exact same logic that we previously had in our hook

  const [width, setWidth] = React.useState(window.innerWidth)
  const [height, setHeight] = React.useState(window.innerHeight)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
  return (
    <ViewportCtxProvider value={{ width, height }}>
      {children}
    </ViewportCtxProvider>
  )
}

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */

export function useViewport(): {
  width: number | null
  height: number | null
} {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
  const { width, height } = useViewportCtx()
  return { width, height }
}
