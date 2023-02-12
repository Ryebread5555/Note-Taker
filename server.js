const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

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
