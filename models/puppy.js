const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puppySchema = new Schema({
  name: {type: String},
  age: {type: Number},
  breed: {type: String}
}, {
  timestamps: true
});

module.exports = mongoose.model('Puppy', puppySchema);