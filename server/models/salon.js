const mongoose = require('mongoose');

const SalonSchema = mongoose.Schema({
  name: String,
  user: String,
  pass: String,
  location: String,
  phone: String,
  picture: String,
  workingHours: Object,
  myServices: [Object],
  breaks: [Object],

  scheduleServices: [Object],
});

module.exports = mongoose.model('Salon', SalonSchema);
