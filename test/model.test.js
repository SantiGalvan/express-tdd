const { test, expect } = require("@jest/globals");

// Class
class Model { }

// 1- Model dovrebbe essere una classe
test('Model dovrebbe essere una classe', () => {
    const model = new Model();
    expect(model).toBeInstanceOf(Model);
});