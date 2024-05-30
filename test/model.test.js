const { test, expect } = require("@jest/globals");
const posts = require('../database/db.json');

// Class
class Model {
    constructor(fileNameJson) {
        if (!fileNameJson) {
            throw new Error('Passare il file JSON');
        }

        this.file = fileNameJson;
    }

    read() {
        return this.file;
    }
}

// 1- Model dovrebbe essere una classe
test('Model dovrebbe essere una classe', () => {
    const model = new Model(posts);
    expect(model).toBeInstanceOf(Model);
});

// 2- L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza
test('- L\'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell\'istanza', () => {
    expect(() => new Model()).toThrow();
});

// 3- L'istanza di model dovrebbe avere il metodo read
test('L\'istanza di model dovrebbe avere il metodo read', () => {
    const model = new Model(posts);

    expect(model.read()).toBeDefined();
});