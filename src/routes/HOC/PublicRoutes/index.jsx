import Layout from 'components/Layout/Layout'
import React from 'react'

const PublicRoute = ({ Component, isAuthenticated }) => {
  return <Layout><Component /></Layout>
}

export default PublicRoute
