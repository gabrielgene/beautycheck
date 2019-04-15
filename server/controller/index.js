const { validateRequest, errorHandler, dataNotFound } = require('./utils');

exports.create = (req, res, Model) => {
  validateRequest(req, res);

  const model = new Model(req.body);

  model
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      errorHandler(err, res);
    });
};

exports.find = (req, res, Model) => {
  const { query, projection } = req.body;
  Model.find(query, projection)
    .then(d => {
      res.send(d);
    })
    .catch(err => {
      errorHandler(err, res);
    });
};

exports.update = (req, res, Model) => {
  validateRequest(req, res);
  const { id, data } = req.body;

  Model.findByIdAndUpdate(id, data, { new: true })
    .then(data => {
      dataNotFound(data, res);
      res.send(data);
    })
    .catch(err => {
      errorHandler(err, res);
    });
};

exports.delete = (req, res, Model) => {
  Model.findByIdAndRemove(req.params.id)
    .then(data => {
      dataNotFound(data, res);
      res.send({ message: 'Model deleted successfully!' });
    })
    .catch(err => {
      errorHandler(err, res);
    });
};
