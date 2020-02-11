import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-unfetch'
import App from './App'

const apolloClient = new ApolloClient({
  link: createUploadLink({
    uri: 'http://localhost:3000/graphql',
    credentials: 'same-origin',
    fetch
  }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
