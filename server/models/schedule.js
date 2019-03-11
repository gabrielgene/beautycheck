const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
  name: String,
  salon: String,
  client: String,
  phoneSalon: String,
  phoneClient: String,
  duration: Number,

  user: String,
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
