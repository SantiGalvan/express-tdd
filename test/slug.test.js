const { test, expect } = require("@jest/globals");
const posts = require("../database/db.json");

// Funzione da testare
const createSlug = (title, list) => {
    if (title.includes(' ')) {
        return title.toLowerCase().replaceAll(' ', '-');
    } else {
        return title.toLowerCase();
    }
}

// 1- createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {
    expect(typeof createSlug('Pippo', posts)).toBe('string');
});

// 2- createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    expect(createSlug('Pippo', posts) === createSlug('Pippo', posts).toLowerCase()).toBe(true)
});

// 3- createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da "-"
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    expect(createSlug('Pippo Franco', posts)).toMatch('-');
});