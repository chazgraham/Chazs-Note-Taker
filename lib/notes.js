const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../data/notes.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../data/notes.json'),
                JSON.stringify({ notes: notesArray }, null, 2)
            );
            break;
        }
    }
}

module.exports = {
    createNewNote,
    deleteNote   
}