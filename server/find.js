const _ = require('lodash');

function getRange(array) {
  const arrayRange = [];
  array.forEach(b => {
    const x = _.range(b[0], b[1], 0.5);
    x.forEach(x => arrayRange.push(x));
  });
  return arrayRange;
}

const findSpaces = (workHour, services, breaks, myService) => {
  const hours = _.range(workHour[0], workHour[1], 0.5);
  const servicesRange = getRange(services);
  const breaksRange = getRange(breaks);
  const hoursAvailable = _.difference(hours, [
    ...servicesRange,
    ...breaksRange,
  ]);
  const spaces = [];
  hoursAvailable.forEach((h, idx, array) => {
    const time = _.range(h, h + myService, 0.5);
    const diff = _.difference(time, array);
    if (diff.length === 0) {
      spaces.push([h, h + myService]);
    }
  });
  return spaces;
};

module.exports = findSpaces;
