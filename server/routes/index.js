const models = require('../models');
const User = require('../models/user');
const Salon = require('../models/salon');
const Schedule = require('../models/schedule');
const { salon } = require('../mock');

module.exports = app => {
  const controller = require('../controller');

  models.forEach(model => {
    app.post(`/${model.name}`, (req, res) =>
      controller.create(req, res, model.Model),
    );

    app.get(`/${model.name}`, (req, res) =>
      controller.findAll(req, res, model.Model),
    );

    app.get(`/find/${model.name}`, (req, res) =>
      controller.findBy(req, res, model.Model),
    );

    app.get(`/${model.name}/:id`, (req, res) =>
      controller.findOne(req, res, model.Model),
    );

    app.put(`/${model.name}/:id`, (req, res) =>
      controller.update(req, res, model.Model),
    );

    app.delete(`/${model.name}/:id`, (req, res) =>
      controller.delete(req, res, model.Model),
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

  app.get('/schedule', async (req, res) => {
    const { auth } = req.cookies;
    const result = await Schedule.find({ user: auth });
    res.send(result);
  });
};
