import Layout from 'components/Layout/Layout'
import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ Component, isAuthenticated }) => {
  return isAuthenticated
    ? (
      <Layout>
        <Component />
      </Layout>
      )
    : <Navigate to='/login' />
}

export default PrivateRoute
