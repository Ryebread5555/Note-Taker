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