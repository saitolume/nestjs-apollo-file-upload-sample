import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-unfetch'

export const apolloClient = new ApolloClient({
  link: createUploadLink({
    uri: 'http://localhost:3000/graphql',
    credentials: 'same-origin',
    fetch
  }),
  cache: new InMemoryCache()
})
