import * as React from 'react'
import { navigate } from 'gatsby'
import { Router } from '@reach/router'
import { useAuth } from '../state'
import Layout from '../components/layout'
import Dashboard from '../components/app/dashboard'
import Jobs from '../components/app/jobs'

const App = ({ location }) => {
  const { isAuthenticated } = useAuth()
  const redirect = location.pathname.split('/').pop()
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { redirect } })
    }
  }, [isAuthenticated, redirect])

  return (
    <Layout>
      <Router basepath="/app">
        <Jobs path="/jobs" />
        <Dashboard default />
      </Router>
    </Layout>
  )
}
export default App
