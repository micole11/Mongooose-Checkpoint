

const mongoose = require('mongoose');
const Schema = mongoose.Schema;




// Creating a person Schema

const personSchema = new Schema({
  name: {
    type : String,
    required : true,
    unique: true
  },
  age: Number,
  gender: String,
  favouriteFoods: [String]
})

module.exports = mongoose.model('Person', personSchema)