const models = require('../models');

module.exports = app => {
  const controller = require('../controller');

  models.forEach(model => {
    app.post(`/${model.name}`, (req, res) =>
      controller.create(req, res, model.Model),
    );

    app.get(`/${model.name}`, (req, res) =>
      controller.findAll(req, res, model.Model),
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
};
