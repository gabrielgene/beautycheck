const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
  name: String,
  salon: String,
  client: String,
  phoneSalon: String,
  phoneClient: String,
  duration: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  salonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon' },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
