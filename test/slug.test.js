const { test, expect } = require("@jest/globals");
const posts = require("../database/db.json");

// Funzione da testare
const createSlug = (title, list) => {
    return title;
}

// 1- createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {
    expect(typeof createSlug('Pippo', posts)).toBe('string');
});