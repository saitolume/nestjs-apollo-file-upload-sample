import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { apolloClient } from './apolloClient'
import Index from './pages'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Index />
  </ApolloProvider>,
  document.getElementById('root')
)
