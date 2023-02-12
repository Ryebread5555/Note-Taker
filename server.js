// require dependencies
const express = require('express');

// initialize express
const app = express();

// create local host
const PORT = process.env.PORT || 3001;

// middleware for public
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// create routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// create app listener
app.listen(PORT, () => {
    console.log(`Sever startup at localhost${PORT}`);
});
