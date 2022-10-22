
const express = require('express');
const morgan = require('morgan');

const app = express();

// Settings
app.use(morgan('dev'));

//Rutas
app.use(require('./routes/index'));

module.exports = app;