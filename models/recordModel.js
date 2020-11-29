import mongoose from 'mongoose'

const recordSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  }
})

const record = mongoose.model('record', recordSchema)

module.exports = record