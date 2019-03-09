// Create and Save a new Model
exports.create = (req, res, Model) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Content can not be empty'
    });
  }

  // Create a Model
  const model = new Model(req.body);

  // Save Note in the database
  model
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Note.'
      });
    });
};

// Retrieve and return all models from the database.
exports.findAll = (req, res, Model) => {
  Model.find()
    .then(datas => {
      res.send(datas);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving notes.'
      });
    });
};

// Find a single Model with a Id
exports.findOne = (req, res, Model) => {
  Model.findById(req.params.id)
    .then(model => {
      if (!model) {
        return res.status(404).send({
          message: 'Model not found with id ' + req.params.id
        });
      }
      res.send(model);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Model not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving model with id ' + req.params.id
      });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res, Model) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: 'Note content can not be empty'
    });
  }

  // Find note and update it with the request body
  Model.findByIdAndUpdate(req.params.idj, req.body, { new: true })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: 'Model not found with id ' + req.params.id
        });
      }
      res.send(data);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Model not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error updating model with id ' + req.params.id
      });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res, Model) => {
  Model.findByIdAndRemove(req.params.id)
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: 'Model not found with id ' + req.params.id
        });
      }
      res.send({ message: 'Model deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Model not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete model with id ' + req.params.id
      });
    });
};
