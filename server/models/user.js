const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },

  mySalons: [Object],
});

module.exports = mongoose.model('User', UserSchema);
