const recordSchema = require('./recordSchema')
const categorySchema = require('./categorySchema')
const situationSchema = require('./situationSchema')
const { gql } = require('apollo-server-express')

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`
module.exports = [ linkSchema, categorySchema, recordSchema, situationSchema ]