const { gql } = require('apollo-server-express')

export default gql`
  type Category {
    id: ID!
    name: String!
    records: [Record!]!
  }

  extend type Query {
    category(id: ID!): Category!
    categories: [Category!]!
  }

  extend type Mutation {
    createCategory(name: !String): Category!
  }
`