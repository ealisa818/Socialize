const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class

const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`YAY! API server running on port ${PORT}!`);
    });
    });