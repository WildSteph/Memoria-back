require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.port || 8000;
const indexRouter = require('./Routes/Index');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
 
app.use('/', indexRouter);

app.get('/', (request, response) => {
    response.send('Bienvenue sur Express');
  });
  


module.exports = app;