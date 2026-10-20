const express = require('express');
const connectDatabase = require('./config/db');
const  app = express();

connectDatabase();

app.listen(4000, () => {
    console.log('http://localhost:4000');
});
