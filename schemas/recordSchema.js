const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar ISODate
  type Record {
    id: ID!
    value: Float!
    timestamp: ISODate!
    category: Category!
  }

  extend type Query {
    record(id: ID!): Record!
    records: [Record!]!
  }

  extend type Mutation {
    createRecord(value: Float!, categoryId: ID!): Record!
    deleteRecord(id: ID!): Record!
  }
`