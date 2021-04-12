const recordModel = require('./../models/recordModel')
const categoryModel = require('./../models/categoryModel')


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
    },
    deleteRecord: async (parent, { id }) => {
      const record = await recordModel.findByIdAndRemove({ _id: id }).exec()
      return record
    }
  },

  Record: {
    category: async ({ category }) => {
      const categoryFull = await categoryModel.findById({ _id: category }).exec();
      return categoryFull;
    },
  },
}