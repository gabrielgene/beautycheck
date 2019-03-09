const findSpaces = require('./');

test('should find spaces', () => {
  const workHour = [8, 21];
  const breaks = [[12, 13], [15, 16]];
  const services = [[8, 10], [13, 14], [17, 17.5], [18, 19.5]];
  const myService = 0.5;
  const expectedHours = [
    [10, 10.5],
    [10.5, 11],
    [11, 11.5],
    [11.5, 12],
    [14, 14.5],
    [14.5, 15],
    [16, 16.5],
    [16.5, 17],
    [17.5, 18],
    [19.5, 20],
    [20, 20.5],
    [20.5, 21],
  ];

  const hours = findSpaces(workHour, services, breaks, myService);
  expect(hours).toEqual(expectedHours);
});

test('should find spaces 1', () => {
  const workHour = [8, 19];
  const breaks = [[9, 10], [12, 13], [16, 17]];
  const services = [[10, 11], [15, 15.5], [17, 18]];
  const myService = 0.5;
  const expectedHours = [
    [8, 8.5],
    [8.5, 9],
    [11, 11.5],
    [11.5, 12],
    [13, 13.5],
    [13.5, 14],
    [14, 14.5],
    [14.5, 15],
    [15.5, 16],
    [18, 18.5],
    [18.5, 19],
  ];

  const hours = findSpaces(workHour, services, breaks, myService);
  expect(hours).toEqual(expectedHours);
});

test('should find spaces 2', () => {
  const workHour = [8, 19];
  const breaks = [[9, 10], [12, 13], [16.5, 17]];
  const services = [[10.5, 11], [15, 15.5], [17, 18]];
  const myService = 1;

  const expectedHours = [
    [8, 9],
    [11, 12],
    [13, 14],
    [13.5, 14.5],
    [14, 15],
    [15.5, 16.5],
    [18, 19],
  ];

  const hours = findSpaces(workHour, services, breaks, myService);
  expect(hours).toEqual(expectedHours);
});

test('should find spaces 3', () => {
  const workHour = [8, 19];
  const breaks = [[9, 10], [12, 13], [16.5, 17]];
  const services = [[10.5, 11], [15, 15.5], [17, 18]];
  const myService = 0.5;
  const expectedHours = [
    [8, 8.5],
    [8.5, 9],
    [10, 10.5],
    [11, 11.5],
    [11.5, 12],
    [13, 13.5],
    [13.5, 14],
    [14, 14.5],
    [14.5, 15],
    [15.5, 16],
    [16, 16.5],
    [18, 18.5],
    [18.5, 19],
  ];

  const hours = findSpaces(workHour, services, breaks, myService);
  expect(hours).toEqual(expectedHours);
});

test('should find spaces 4', () => {
  const workHour = [7, 20];
  const breaks = [[8.5, 9], [12, 12.5], [16.5, 17]];
  const services = [[10.5, 11], [15, 15.5], [17, 18]];
  const myService = 1.5;
  const expectedHours = [
    [7, 8.5],
    [9, 10.5],
    [12.5, 14],
    [13, 14.5],
    [13.5, 15],
    [18, 19.5],
    [18.5, 20],
  ];

  const hours = findSpaces(workHour, services, breaks, myService);
  expect(hours).toEqual(expectedHours);
});
