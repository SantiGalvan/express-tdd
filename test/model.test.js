const { test, expect } = require("@jest/globals");
const posts = require('../database/db.json');
const fs = require('fs');

// Class
class Model {

    constructor(nameFile) {
        this.nameFile = `${nameFile}` + '.json';
    }

    read() {
        const file = fs.readFileSync(`./database/${this.nameFile}`, 'utf8');
        return JSON.parse(file);
    }

    add() {
        return 'Aggiungi elementi';
    }
}

// 1- Model dovrebbe essere una classe
test('Model dovrebbe essere una classe', () => {
    const model = new Model('db');

    expect(model).toBeInstanceOf(Model);
});

// 2- L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza
test("L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza", () => {
    const model = new Model('db');
    expect(model.nameFile).toBe('db.json');
});

// 3- L'istanza di model dovrebbe avere il metodo read
test('L\'istanza di model dovrebbe avere il metodo read', () => {
    const model = new Model('db');

    expect(model.read).toBeInstanceOf(Function);
});

// 4- L'istanza di model dovrebbe avere il metodo add
test('L\'istanza di model dovrebbe avere il metodo add', () => {
    const model = new Model('db');

    expect(model.add).toBeInstanceOf(Function);
});

// 5- read dovrebbe ritornare un array
test('read dovrebbe ritornare un array', () => {
    const model = new Model('db');
    const arrayFile = model.read()

    expect(Array.isArray(arrayFile)).toBe(true);
});