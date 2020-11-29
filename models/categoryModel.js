const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  records: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'record'
    }
  ]
})

const category = mongoose.model('category', categorySchema)

module.exports = category