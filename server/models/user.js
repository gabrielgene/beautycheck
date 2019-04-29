const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  user: String,
  pass: String,
  phone: String,

  mySalons: [String],
});

module.exports = mongoose.model('User', UserSchema);
