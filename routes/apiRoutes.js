// create dependencies
const path = require('path');
const fs = require('fs');

var uniqId = require('uniqid');

// create routing
module.exports = (app) => {

    // TODO: Create GET /api/notes to read the db.json file and return saved notes as a JSON file.
    app.get('/api/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });
    
}

// TODO: Create POST /api/notes, add it to db.json file
app.post('./api/notes', (req, res) => {
    const db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);

    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqId(),
    };
    // TODO: Push newNote into db.json 
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

// TODO: Create DELETE /api/notes with query parameter containing the id of the note to delete.
