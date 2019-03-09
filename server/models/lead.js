const mongoose = require('mongoose');

const LeadSchema = mongoose.Schema({
  tel: String,
  email: String,
  security: String,
  cpf: String,
  location: String,
  bided: Boolean,
});

module.exports = mongoose.model('Lead', LeadSchema);
