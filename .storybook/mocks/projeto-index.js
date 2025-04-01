// Mock for ../core/src/projeto/index.ts

// Import the Tipo enum from our generic mock
const { Tipo, Nivel } = require('./core-proxy');

// Create the Projeto interface mock
const Projeto = {};

// Export according to what's expected in the real file
module.exports = {
  Projeto,
  Tipo,
  Nivel
};