const models = require('../models');
const User = require('../models/user');

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

  app.get('/calendar/:user', async (req, res) => {
    const { user } = req.params;
    const result = await User.findOne({ user });
    result
      ? res.status(200).send(result)
      : res.status(404).send('Data not found');
  });

  app.post('/auth', (req, res) => {
    const { user, pass } = req.body;
    console.log('Cookies: ', req.cookies);

    User.findOne({ user, pass }).then(r => {
      if (r) {
        console.log({ r });
        res.cookie('auth', user, { maxAge: 900000 }).send('ok');
      } else {
        res.status(401).send('User or password wrong');
      }
    });
  });
};
