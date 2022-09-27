const fs = require('fs');
const { createNewNote } = require('../lib/notes.js');
const { notes } = require('../data/notes');

jest.mock('fs');

test('craetes note object', () => {
    const note = createNewNote({ title: 'titletest', text: 'texttest'}, notes);

    expect(note.title).toBe('titletest');
    expect(note.text).toBe('texttest');
})