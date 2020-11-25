const { gql } = require('apollo-server-express')

export default gql`
  scalar ISODate
  type Record {
    id: ID!
    value: Float!
    timestamp: ISODate!
    category: Category!
  }

  extend type Query {
    record(id: ID!): Record!
    records: [Records!]!
  }

  extend type Mutation {
    createRecord(value: !Float, categoryId: ID!): Record!
  }
`