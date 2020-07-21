const { ApolloServer, gql } = require('apollo-server')


const typeDefs = gql`
  type User{
      id: ID
      username: String!
      friends: [User]!
  }
  type Query{
      me: User!
  }
`
const resolvers = {
    Query: {
        me(){
            return{
                id: '1',
                username: 'username',
                friends: []
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) =>{
    console.log(`🚀 Server is running on ${url}`)
})
