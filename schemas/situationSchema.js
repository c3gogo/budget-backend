const { gql } = require('apollo-server-express')

module.exports = gql`
  type Situation {
    id: ID!
    value: Float!
    timestamp: ISODate!
    timestampStart: ISODate!
    timestampEnd: ISODate!
    categories: [Category!]!
  }

  extend type Query {
    situation(id: ID!): Situation!
    situations: [Situation!]!
  }

  extend type Mutation {
    createSituation(startDate: ISODate!, endDate: ISODate!, categories: [ID!]!): Situation!
    deleteSituation(id: ID!): Situation!

  }
`