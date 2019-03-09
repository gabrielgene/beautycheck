const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const config = require('./config');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(config.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

mongoose.set('debug', true);

// create express app
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my server.',
  });
});

require('./routes')(app);

// listen for requests
app.listen(9090, () => {
  console.log('Server is listening on port 9090');
});
