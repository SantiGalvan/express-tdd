const { test, expect } = require("@jest/globals");
const posts = require("../database/db.json");

// Funzione da testare
const createSlug = (title, list) => {
    let baseSlug = '';
    if (title.includes(' ')) {
        baseSlug = title.toLowerCase().replaceAll(' ', '-');
    } else {
        baseSlug = title.toLowerCase();
    }
    const slugs = list.map(l => l.slug);
    let counter = 1;
    let slug = baseSlug;
    while (slugs.includes(slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }
    return slug;
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

// 4- createSlug dovrebbe incrementare di 1 lo slug quando esiste già
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    slugs = posts.map(post => post.slug);
    slug = createSlug('Pasta barbabietola e gorgonzola', posts);
    expect(slugs.includes(slug)).toBe(false);
});