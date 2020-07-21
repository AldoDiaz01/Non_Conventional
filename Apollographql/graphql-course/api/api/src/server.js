const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const { models, db, user } = require('./db')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
        // const isAuth = req.headers.authorization
        // const user= db.get('user').value()
        // if(!user) throw new Error('not auth')
        return {models, db, user}
        // return { models, db }
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at  ${url}`);
})