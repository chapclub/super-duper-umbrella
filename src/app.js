'use strict';

const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyparser = require('body-parser');

const touchRoutes = require('./routes/touch');

const PORT = process.env.PORT || 6969;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan('dev'));

app.use('/', touchRoutes);

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
