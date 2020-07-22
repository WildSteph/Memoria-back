const express = require('express');
const app = express();
const port = process.env.port || 8000;

app.get('/', (request, response) => {
    response.send('Bienvenue sur Express');
  });

module.exports = app; 