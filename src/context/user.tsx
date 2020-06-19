import * as React from "react"

const AuthContext = React.createContext({
  status: "pending",
  error: null,
  user: null,
})

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = React.useState({
    status: "pending",
    error: null,
    user: null,
  })
  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const state = React.useContext(AuthContext)
  const isPending = state.status === "pending"
  const isError = state.status === "error"
  const isSuccess = state.status === "success"
  const isAuthenticated = state.user && isSuccess
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  }
}

export { useAuth, AuthProvider }
