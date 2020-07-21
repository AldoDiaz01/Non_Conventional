const { gql } = require('apollo-server')

const typeDefs = gql `
  
  type User{
    id: ID
    username: String!
    pets: [Pet]!
  }
  enum PetType {
      CAT
      DOG
  }

  type Pet{
    id: ID!
    type: PetType!
    name: String!
    owner: User!
    img: String!
    createdAt: Int!
  }

  input NewPetInput{
      name: String!
      type: PetType!
  }

  input PetInput{
    type: PetType
    name: String
  }

  type Query{
      user: User!
      pets(input:PetInput): [Pet]! 
      pet(id: ID!): Pet!
  }

  type Mutation{
    addPet(input:NewPetInput!): Pet! 
  }
`;

module.exports = typeDefs