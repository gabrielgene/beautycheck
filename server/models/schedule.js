const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
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
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  salon: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon' },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
