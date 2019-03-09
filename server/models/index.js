const Document = require('./document');
const Lead = require('./lead');

module.exports = [
  {
    name: 'documents',
    Model: Document,
  },
  {
    name: 'leads',
    Model: Lead,
  },
];
