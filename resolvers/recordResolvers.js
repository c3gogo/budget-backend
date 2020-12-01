const recordModel = require('./../models/recordModel')

module.exports = {
  Query: {
    record: async (parent, { id }) => {
      const record = await recordModel.findById({ _id: id }).exec()
      return record
    },
    records: async (parent) => {
      const records = await recordModel.find({}).exec()
      return records
    }
  },

  Mutation: {
     createRecord: async (parent, { value, categoryId }) => {
      const record = await recordModel.create({ value, timestamp: new Date(), category: categoryId }) 
      return record
    }
  }
}