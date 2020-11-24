const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const mongoose = require('mongoose')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers})
const app = express()
server.applyMiddleware({ app })

const url = 'mongodb://localhost:27017/budgetdb'

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`))

app.listen({ port: 3000}, () => console.log(`Server ready at http://localhost:3000${server.graphqlPath}`))