const mongoose = require('mongoose');

const SalonSchema = mongoose.Schema({
  name: String,
  user: String,
  pass: String,
  location: String,
  phone: String,
  picture: String,
  workingHours: Object,
  breaks: [Object],
  myServices: [Object],
});

module.exports = mongoose.model('Salon', SalonSchema);
