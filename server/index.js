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
app.use(cors());

// define a simple route
app.get('/', (_, res) => {
  res.json({
    routes: app._router.stack
      .map(s => s.route)
      .filter(r => r)
      .map(r => ({ route: r.path, method: r.stack[0].method })),
  });
});

require('./routes')(app);

// listen for requests
app.listen(process.env.PORT || 9090, () => {
  console.log('Server is listening on port 9090');
});
