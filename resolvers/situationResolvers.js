const recordModel = require('./../models/recordModel')
const situationModel = require('./../models/situationModel')
const categoryModel = require('./../models/categoryModel')




module.exports = {
  Query: {
    situation: async (parent, { id }) => {
      const record = await situationModel.findById({ _id: id }).exec()
      return record
    },
    situations: async (parent) => {
      const records = await situationModel.find({}).exec()
      return records
    }
  },

  Mutation: {
    createSituation: async (parent, { startDate, endDate, categories }) => {
      let value
      let startRecords = await recordModel.find({timestamp: startDate, category: { "$in": categories }})
      let endRecords = await recordModel.find({timestamp: endDate, category: { "$in": categories }})

      let sumStartRecords = startRecords.reduce((prev, curr) => prev + curr.value, 0)
      let sumEndRecords = endRecords.reduce((prev, curr) => prev + curr.value, 0)

      value = sumEndRecords - sumStartRecords

      const situation = await situationModel.create({ value, timestampStart: startDate, timestampEnd: endDate, categories }) 
      return situation
    },
    deleteSituation: async (parent, { id }) => {
      const situation = await situationModel.findByIdAndRemove({ _id: id }).exec()
      return situation
    },
  },
  Situation: {
    categories: async ({ categories }) => {
      const categoriesFull = await categoryModel.find({ id: { "$in": categories} }).exec()
      return categoriesFull
    }
  }
}