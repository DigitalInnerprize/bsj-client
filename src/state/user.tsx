import * as React from "react"
import { createUseReducerCtx } from "../utils/createCtx"
import fetch from "isomorphic-fetch"

interface Auth {
  identifier?: string
  username?: string
  password?: string
  email?: string
  first_name?: string
  last_name?: string
}

interface AuthState {
  user?: object | null
  error?: string | null
  isLoggedIn?: boolean
}

const initialState = {}
type AppState = typeof initialState
type Action =
  | { type: "LOGIN"; payload: Record<string, any> }
  | { type: "REGISTER"; payload: Record<string, any> }
  | { type: "ERROR"; payload: Record<string, any> }
  | { type: "LOGOUT" }

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        error: null,
        user: action.payload.user,
      }
    case "REGISTER":
      return {
        ...state,
        isLoggedIn: false,
        error: null,
        user: action.payload.user,
      }
    case "ERROR":
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload.error,
        user: null,
      }
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        error: null,
        user: null,
      }
    default:
      return state
  }
}

const [AuthCtx, AuthCtxProvider] = createUseReducerCtx(reducer, initialState)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => <AuthCtxProvider>{children}</AuthCtxProvider>

const useAuth = () => {
  const { state, dispatch } = React.useContext(AuthCtx)
  const getUserInfo = async () => {
    try {
      const response = await fetch(`${process.env.GATSBY_AUTH_URL}/api/user/me`)
      const user = response.json()
      dispatch({ type: "LOGIN", payload: user })
    } catch (error) {
      dispatch({ type: "ERROR", payload: error })
    }
  }
  const login = async (data: Auth) => {
    data.identifier = data.email
    data.username = data.email
    try {
      const response = await fetch(
        `${process.env.GATSBY_AUTH_URL}/api/auth/local`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      const user = await response.json()
      dispatch({ type: "LOGIN", payload: user })
    } catch (error) {
      dispatch({ type: "ERROR", payload: error })
    }
  }
  const register = async (data: Auth) => {
    data.identifier = data.email
    data.username = data.email
    try {
      const response = await fetch(
        `${process.env.GATSBY_AUTH_URL}/api/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      const user = await response.json()
      console.log(user)
      dispatch({ type: "REGISTER", payload: user })
    } catch (error) {
      console.log("error =", error)
      dispatch({ type: "ERROR", payload: error })
    }
  }

  const logout = async () => {
    try {
      await fetch(`${process.env.GATSBY_AUTH_URL}/api/user/logout`)
      dispatch({ type: "LOGOUT" })
    } catch (error) {
      dispatch({ type: "ERROR", payload: error })
    }
  }

  return {
    ...state,
    login,
    register,
    getUserInfo,
    logout,
  }
}

export { useAuth, AuthProvider }
