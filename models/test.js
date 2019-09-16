
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Testchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true
  },
  detail: {
    type: String
  }
}, { collection: 'Test'});

module.exports = mongoose.model('test', Testchema);