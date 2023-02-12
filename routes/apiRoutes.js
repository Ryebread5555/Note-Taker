// create dependencies
const path = require('path');
const fs = require('fs');

var uniqId = require('uniqid');

// create routing
module.exports = (app) => {

    app.get('/api/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

app.post('./api/notes', (req, res) => {
    const db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);

    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqId(),
    };

    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

// TODO: Create DELETE /api/notes with query parameter containing the id of the note to delete.
app.delete('./api/notes/:id', (req, res) => {
    const db = JSON.parse(fs.readFileSync('db/db.json'));
    const deleteNote = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
});

}