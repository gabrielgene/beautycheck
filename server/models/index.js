const Salon = require('./salon');
const User = require('./user');

module.exports = [
  {
    name: 'salon',
    Model: Salon,
  },
  {
    name: 'user',
    Model: User,
  },
];
