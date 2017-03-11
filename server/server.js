const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/../client')));

app.get('/', (req, res) => {
  res.send('hello world');
});


module.exports = app;