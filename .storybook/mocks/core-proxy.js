// This is a generic proxy module that matches the structure used in "../core" imports 
// For any file, export mocks of the main types and functions

// Mock ID class
class Id {
  static generate() {
    return 'mock-id-' + Math.floor(Math.random() * 1000000);
  }
}

// Mock Tipo enum and Nivel enum
const Tipo = {
  WEB: "WEB",
  MOBILE: "MOBILE",
  DESKTOP: "DESKTOP",
  CLI: "CLI",
  JOGO: "JOGO",
  OUTRO: "OUTRO"
};

const Nivel = {
  FACIL: "FACIL",
  MEDIO: "MEDIO",
  DIFICIL: "DIFICIL",
  EXPERT: "EXPERT"
};

// Mock Projeto object
const Projeto = {};

// Mock Tecnologia object
const Tecnologia = {};

// Export all our mocks - these will be used regardless of which subpath is imported
module.exports = { 
  Tipo, 
  Nivel, 
  Id,
  Projeto,
  Tecnologia,
  // Export defaults for any individual modules
  default: {
    Tipo, 
    Nivel, 
    Id,
    Projeto,
    Tecnologia
  }
};