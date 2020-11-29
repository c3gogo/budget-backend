const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const schemas = require('./schemas')
const resolvers = require('./resolvers')
const cors = require('cors')

const server = new ApolloServer({ typeDefs: schemas, resolvers})
const app = express()
app.use(cors())
server.applyMiddleware({ app })

const url = 'mongodb://localhost:27017/budgetdb'

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`))

app.listen({ port: 3000}, () => console.log(`Server ready at http://localhost:3000${server.graphqlPath}`))