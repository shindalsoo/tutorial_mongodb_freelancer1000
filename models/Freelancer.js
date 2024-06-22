const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FreelancersSchema2 = new Schema({
  name: {
    type: String,
    required: [true, 'Freelancer must have name'],
    trim: true,
    unique: true,
  },
  position: {
    type: String,
    required: [true, 'Freelancer must have position'],
    trim: true,
  },
  experience: {
    type: String,
    required: [true, 'Experience is required'],
    trim: true,
  },
})

const FreelancersSchema = new Schema({
  index: {type:Number},
  name: {type:String},
  isActive: {type:Boolean},
  registered: {type:Date},
  age: {type:Number},
  gender: {type:String},
  eyeColor: {type:String},
  favoriteFruit: {type:String},
  company: {
    title: {type:String},
    email: {type:String},
    phone: {type:String},
    location: {
      country: {type:String},
      address: {type:String}
    }
  },
  tags: {type:Array}
})

const Freelancers = mongoose.model('Freelancer', FreelancersSchema)

module.exports = Freelancers