const { errorHandler } = require('../controller/utils');
const models = require('../models');
const User = require('../models/user');
const Salon = require('../models/salon');
const Schedule = require('../models/schedule');
const findSpaces = require('../find');
const mock = require('../mock');

module.exports = app => {
  const controller = require('../controller');

  models.forEach(Model => {
    app.post(`/create/${Model.collection.collectionName}`, (req, res) =>
      controller.create(req, res, Model),
    );

    app.post(`/find/${Model.collection.collectionName}`, (req, res) =>
      controller.find(req, res, Model),
    );

    app.put(`/update/${Model.collection.collectionName}`, (req, res) =>
      controller.update(req, res, Model),
    );

    app.delete(`/delete/${Model.collection.collectionName}/:id`, (req, res) =>
      controller.delete(req, res, Model),
    );
  });

  app.post('/auth/salon', (req, res) => {
    const { user, pass } = req.body;

    Salon.findOne({ user, pass }).then(r => {
      if (r) {
        res.cookie('auth', r._id, { maxAge: 9000000000 });
        res.cookie('type', 'salon', { maxAge: 9000000000 }).send('ok');
      } else {
        res.status(401).send('User or password wrong');
      }
    });
  });

  app.post('/auth/user', (req, res) => {
    const { user, pass } = req.body;

    User.findOne({ user, pass }).then(r => {
      if (r) {
        res.cookie('auth', r._id, { maxAge: 9000000000 });
        res.cookie('type', 'client', { maxAge: 9000000000 }).send('ok');
      } else {
        res.status(401).send('User or password wrong');
      }
    });
  });

  app.post('/find-spaces', (req, res) => {
    const { salon, myService, date } = req.body;
    const salonId = salon._id;

    Salon.findOne({ _id: salonId }).then(s => {
      Schedule.find({ salonId, status: 'ACTIVE', date }).then(schedules => {
        const { workingHours, breaks } = s;
        const workHours = workingHours.monday;
        const services = schedules.map(s => s.time);

        const hours = findSpaces(
          workHours,
          services,
          breaks,
          myService.duration,
        );

        res.send({ hours, services, breaks });
      });
    });
  });

  app.post('/create-schedule', (req, res) => {
    const { date, status, time, salonId, userId, service } = req.body;

    Salon.findOne({ _id: salonId }).then(s => {
      const salonName = s.name;
      const salonPhone = s.phone;

      User.findOne({ _id: userId }).then(u => {
        const clientName = u.name;
        const clientPhone = u.phone;
        const scheduleDate = new Date();
        const createdAt = new Date();
        scheduleDate.setHours(0, 0, 0, 0);

        const schedule = new Schedule({
          status,
          date,
          scheduleDate,
          createdAt,
          time,
          salonName,
          salonPhone,
          clientName,
          clientPhone,
          userId,
          salonId,
          service,
        });

        schedule
          .save()
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            errorHandler(err, res);
          });
      });
    });
  });

  app.get('/fake-salon', (req, res) => {
    const fake = new Salon(mock.salon);
    fake
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        errorHandler(err, res);
      });
  });
};
