// Mock for ../core/src/shared/Id.ts

// Create the Id class
class Id {
  static generate() {
    return 'mock-id-' + Math.floor(Math.random() * 1000000);
  }
}

// Export it as default
module.exports = Id;
module.exports.default = Id;