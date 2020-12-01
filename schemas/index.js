const categorySchema = require('./categorySchema')
const recordSchema = require('./recordSchema')
const { gql } = require('apollo-server-express')

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`
module.exports = [ linkSchema, categorySchema, recordSchema ]