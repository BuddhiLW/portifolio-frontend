// Mock implementation of @buddhilw/core for Storybook

// Mock Id class
class Id {
  static generate() {
    return 'mocked-id-' + Math.random().toString(36).substr(2, 9);
  }
}

// Mock Tipo enum
const Tipo = {
  WEB: "WEB",
  MOBILE: "MOBILE",
  DESKTOP: "DESKTOP",
  CLI: "CLI",
  JOGO: "JOGO",
  OUTRO: "OUTRO"
};

// Mock Nivel enum
const Nivel = {
  FACIL: "FACIL",
  MEDIO: "MEDIO",
  DIFICIL: "DIFICIL",
  EXPERT: "EXPERT"
};

// Mock Tecnologia interface
class Tecnologia {
  constructor(id, nome, descricao, imagem, destaque) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.imagem = imagem;
    this.destaque = destaque;
  }
}

// Export the mocks
module.exports = {
  Id,
  Tipo,
  Nivel,
  Tecnologia
};