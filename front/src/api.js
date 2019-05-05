import axios from 'axios';

export default axios.create({
  baseURL: 'https://beautycheck-server.herokuapp.com',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const services = ['Corte de Cabelo', 'Unha', 'Escova Progressiva', 'Prancha'];
const prices = ['R$10,00', 'R$100,00', 'R$15,00', 'R$30,00'];
const durations = ['10:00 ~ 11:00', '07:00 ~ 08:00', '09:00 ~ 10:00'];
const clients = ['Gabriel Genê', 'Juliana Jennifer'];

const calendarMock = [...Array(10).keys()].map(key => ({
  date: `1${key}/03/2019`,
  schedules: [...Array(7).keys()].map(key => ({
    service: services[Math.floor(Math.random() * services.length)],
    price: prices[Math.floor(Math.random() * prices.length)],
    duration: durations[Math.floor(Math.random() * durations.length)],
    client: clients[Math.floor(Math.random() * clients.length)],
    id: key,
  })),
}));

export const getCalendar = () => calendarMock;
