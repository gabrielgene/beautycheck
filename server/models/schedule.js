const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
  status: String,
  date: String,
  time: [Number],

  clientName: String,
  clientPhone: String,
  salonName: String,
  salonPhone: String,

  userId: String,
  salonId: String,
  service: Object,
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
