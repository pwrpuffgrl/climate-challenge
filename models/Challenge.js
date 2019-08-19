const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rules: {
    type: String,
    required: true
  },
  tips: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  joined: {
    type: Boolean,
    default: false
  },
  startDate: {
    type: Date,
    default: Date.now()
  },
  endDate: {
    type: Date
  },
  lastParticipated: Date,
  modified: Date,
  completed: {
    type: Boolean,
    default: false
  },
  karma: {
    type: Number,
    default: 0
  },
  streak: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Challenge', challengeSchema);
