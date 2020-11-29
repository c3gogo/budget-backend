const categoryModel = require('./../models/categoryModel')

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
    }
  }
}