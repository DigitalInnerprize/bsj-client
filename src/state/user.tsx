import * as React from 'react'
import { createUseReducerCtx } from '../utils/createCtx'
import fetch from 'isomorphic-fetch'

interface Auth {
  identifier?: string
  username?: string
  password?: string
  email?: string
  first_name?: string
  last_name?: string
}

interface AuthState {
  user?: Record<string, any>
  isLoggedIn?: boolean
  error?: Record<string, any>
}

const initialState = {
  user: {},
  error: {},
  isLoggedIn: false,
}
type AppState = typeof initialState
type Action =
  | { type: 'LOGIN'; payload: Record<string, any> }
  | { type: 'REGISTER'; payload: Record<string, any> }
  | { type: 'ERROR'; payload: Record<string, any> }
  | { type: 'FETCH_USER_SUCCESS'; payload: Record<string, any> }
  | { type: 'LOGOUT'; payload: Record<string, any> | {} }

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLoggedIn: true,
        error: {},
        user: action?.payload,
      }
    case 'REGISTER':
      return {
        isLoggedIn: true,
        error: {},
        user: action?.payload,
      }
    case 'ERROR':
      return {
        isLoggedIn: false,
        error: action?.payload,
        user: {},
      }
    case 'LOGOUT':
      return {
        isLoggedIn: false,
        error: {},
        user: action?.payload,
      }
    case 'FETCH_USER_SUCCESS':
      return {
        isLoggedIn: true,
        error: {},
        user: action?.payload,
      }
    default:
      return state
  }
}

const [AuthCtx, AuthCtxProvider] = createUseReducerCtx(reducer, initialState)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => (
  <AuthCtxProvider>{children}</AuthCtxProvider>
)

const useAuth = () => {
  const { state, dispatch } = React.useContext(AuthCtx)
  React.useEffect(() => {
    getUserInfo()
  }, [])
  const isAuthenticated = Object.keys(state?.user).length !== 0 && state?.isLoggedIn
  const getUserInfo = async () => {
    try {
      const response = await fetch(`${process.env.GATSBY_AUTH_URL}/api/user/me`, {
        credentials: 'include',
      })
      const user = await response.json()
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: user })
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error })
    }
  }
  const login = async (data: Auth) => {
    try {
      const response = await fetch(`${process.env.GATSBY_AUTH_URL}/api/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
      const user = await response.json()
      dispatch({ type: 'LOGIN', payload: user })
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error })
    }
  }

  const register = async (data: Auth) => {
    data.identifier = data.email
    data.username = data.email
    try {
      const response = await fetch(`${process.env.GATSBY_AUTH_URL}/api/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
      const user = await response.json()
      dispatch({ type: 'REGISTER', payload: user })
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error })
    }
  }

  const logout = async () => {
    try {
      const response = await fetch(`${process.env.GATSBY_AUTH_URL}/api/user/logout`)
      const user = await response.json()
      dispatch({ type: 'LOGOUT', payload: user.status === 200 && {} })
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error })
    }
  }

  return {
    state,
    isAuthenticated,
    login,
    register,
    logout,
  }
}

export { useAuth, AuthProvider }
