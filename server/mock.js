const salon = {
  name: 'Gene Barber Shop',
  user: 'gene',
  pass: '123',
  location: 'Engenho velho de brotas, 13',
  phone: '(71) 99222-9059',
  picture:
    'https://toppossystem.com/wp-content/uploads/2018/03/Best-POS-Systems-For-Barbershops.png',
  workingHours: {
    monday: [8, 18],
    tuesday: [8, 18],
    wednesday: [8, 18],
    thursday: [8, 18],
    friday: [8, 18],
    saturday: [8, 18],
    sunday: null,
  },
  breaks: [[12, 13], [16, 17]],
  myServices: [
    {
      name: 'Corte de Cabelo',
      duration: 1,
      price: 30,
    },
    {
      name: 'Unha',
      duration: 0.5,
      price: 10,
    },
    {
      name: 'Escova',
      duration: 1.5,
      price: 100,
    },
  ],
};

module.exports = { salon };
