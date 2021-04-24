const categoryModel = require('./../models/categoryModel')
const recordModel = require('./../models/recordModel')


module.exports = {
  Query: {
    category: async (parent, { id }) => {
      const category = await categoryModel.findById({ _id: id }).exec()
      return category
    },
    categories: async (parent) => {
      const categories = await categoryModel.find({}).exec()
      return categories
    }
  },

  Mutation: {
    createCategory: async (parent, { name }) => {
      const category = await categoryModel.create({ name }) 
      return category
    },
    deleteCategory: async (parent, { id }) => {
      const category = await categoryModel.findByIdAndRemove({ _id: id }).exec()
      await recordModel.deleteMany({ category: id }).exec()
      return category
    }
  },

  Category: {
    records: async ({id}) => {
      const records = await recordModel.find({ category: id }).exec()
      return records
    }
  }
}