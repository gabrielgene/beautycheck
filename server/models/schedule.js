const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
  scheduleName: String,
  clientName: String,
  salonName: String,

  phoneSalon: String,
  phoneClient: String,

  time: Number,
  duration: Number,

  userId: String,
  salonId: String,
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
