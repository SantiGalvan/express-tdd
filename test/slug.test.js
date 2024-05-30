const { test, expect } = require("@jest/globals");
const posts = require("../database/db.json");

// Funzione da testare
const createSlug = (title, list) => {

    if (!title) throw new Error("Title è obbligatorio");
    if (typeof title !== 'string') throw new Error('Title deve essere una stringa!');

    if (!list) throw new Error('Inserisci la lista');

    let baseSlug = '';

    title.includes(' ') ? baseSlug = title.toLowerCase().replaceAll(' ', '-') : baseSlug = title.toLowerCase();

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

    const slug = createSlug('Pippo', posts);

    expect(typeof slug).toBe('string');
});

// 2- createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {

    const slug = createSlug('Pippo', posts);

    expect(slug === slug.toLowerCase()).toBe(true);
});

// 3- createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da "-"
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {

    const slug = createSlug('Pippo Franco', posts);

    expect(slug).toMatch('-');
});

// 4- createSlug dovrebbe incrementare di 1 lo slug quando esiste già
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    const slugs = posts.map(post => post.slug);

    const slug = createSlug('Pasta barbabietola e gorgonzola', posts);

    expect(slugs.includes(slug)).toBe(false);
});

// 5- createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
    expect(() => createSlug(45, posts)).toThrow();
    expect(() => createSlug(undefined, posts)).toThrow();
    expect(() => createSlug('', posts)).toThrow();
})

// 6- createSlug dovrebbe lanciare un errore se manca l'array dei post
test('createSlug dovrebbe lanciare un errore se manca l\'array dei post', () => {
    expect(() => createSlug('Patatine fritte')).toThrow();
});