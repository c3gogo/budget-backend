const mongoose = require('mongoose')

const situationSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  timestampStart: {
    type: Date,
    required: true
  },
  timestampEnd: {
    type: Date,
    required: true
  },
  categories: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'category',
    required: true
  }
})

const situation = mongoose.model('situation', situationSchema)

module.exports = situation