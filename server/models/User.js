const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  about_me: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  karmaPoints: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
