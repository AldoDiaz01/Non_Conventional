import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context' //19.2K (gzipped: 6K)
import gql from 'graphql-tag'

/**
 *Create a new apollo client and export as default
 */

const link = new HttpLink({uri: 'http://localhost:4000/'})
const cache = new InMemoryCache()

const client = new ApolloClient({
    link,
    cache
})

//const typeDefs =gql `

//`

const query = gql`
    {
        pets{
            id
            type
            name
        }
    }
`
client.query({query})

 export default client;