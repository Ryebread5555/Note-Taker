const path = require('path');

// routing
module.exports = (app) => {
    
    //TODO: create routes
    //GET /notes will return the notes.html file
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    //TODO: GET * to return the index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}