const models = require('../models');
const User = require('../models/user');
const Salon = require('../models/salon');
const Schedule = require('../models/schedule');
const { salon } = require('../mock');

module.exports = app => {
  const controller = require('../controller');

  models.forEach(Model => {
    app.post(`/create/${Model.collection.collectionName}`, (req, res) =>
      controller.create(req, res, Model),
    );

    app.post(`/find/${Model.collection.collectionName}`, (req, res) =>
      controller.find(req, res, Model),
    );

    app.put(`/update/${Model.collection.collectionName}/:id`, (req, res) =>
      controller.update(req, res, Model),
    );

    app.delete(`/delete/${Model.collection.collectionName}/:id`, (req, res) =>
      controller.delete(req, res, Model),
    );
  });

  app.post('/auth/salon', async (req, res) => {
    const { user, pass } = req.body;

    Salon.findOne({ user, pass }).then(r => {
      if (r) {
        res.cookie('auth', r._id, { maxAge: 9000000000 }).send('ok');
      } else {
        res.status(401).send('User or password wrong');
      }
    });
  });

  app.post('/auth/user', (req, res) => {
    const { user, pass } = req.body;

    User.findOne({ user, pass }).then(r => {
      if (r) {
        res.cookie('auth', r._id, { maxAge: 9000000000 }).send('ok');
      } else {
        res.status(401).send('User or password wrong');
      }
    });
  });
};
