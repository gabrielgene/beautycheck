const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
  title: String,
  content: String,
  img: String,
  trunc: String,
});

module.exports = mongoose.model('Document', DocumentSchema);
