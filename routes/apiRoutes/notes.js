const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../data/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    const note = createNewNote(req.body, notes);
    res.json(note);   
});

//TODO: get this delete api working, current is 404
router.delete('notes/:id', (req, res) => {
    //deleteNote(req.body.id, notes);
    //res.json(true)
    const note = deleteNote(req.params.id, notes)
    res.json(note);
})

module.exports = router;