exports.validateRequest = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Content can not be empty',
    });
  }
};

exports.errorHandler = (err, res) => {
  res.status(500).send({
    message: err.message || 'Some error occurred.',
  });
};

exports.dataNotFound = (data, res) => {
  if (!data) {
    res.status(404).send({
      message: 'Model not found',
    });
  }
};
