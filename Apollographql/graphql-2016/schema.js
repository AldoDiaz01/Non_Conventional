const {makeExecutableSchema, addMockFunctionsToSchema} = require ('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
type Food {
    id: String
    name: String
    description: String
    price: Float
    quantity: Int
    sellers: [String]
}

type Query {
    foods(price: Int): [Food]
    food(id: String!): Food
}

type Mutation {
    addFood(name: String!, description: String, price: Float!, quantity: Int!, sellers: [String]): Food
    deleteFood(id: String!): Food
    updateFood(id: String!, name:String!): Food
}
`;

const schema = makeExecutableSchema({typeDefs, resolvers});
//addMockFunctionsToSchema({schema});

module.exports = schema;
