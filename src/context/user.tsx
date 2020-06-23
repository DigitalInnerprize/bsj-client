import * as React from "react"
import createCtx from "../utils/createCtx"

interface ContextState {
  status: string
  error: string | null
  user: Record<string, unknown> | null
}

const [useAuthCtx, AuthCtxProvider] = createCtx<ContextState>()

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const [state, setState] = React.useState({
    status: "pending",
    error: null,
    user: null,
  })
  return (
    <AuthCtxProvider value={{ state, setState }}>{children}</AuthCtxProvider>
  )
}

function useAuth(): {
  state: ContextState
  isPending: boolean | null | undefined
  isError: boolean | null | undefined
  isSuccess: boolean | null | undefined
  isAuthenticated: boolean | null | undefined
} {
  const state = useAuthCtx()
  const isPending = state.status === "pending"
  const isError = state.status === "error"
  const isSuccess = state.status === "success"
  const isAuthenticated = state.user && isSuccess
  return {
    state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  }
}

export { useAuth, AuthProvider }
