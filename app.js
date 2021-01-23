const express = require('express');
const body_parser = require('body-parser');
const app = express();

//Load routes
const student_routes = require('./routes/studentRoutes');

//Middleware
app.use(body_parser.json());

//Routes
app.use('/api', student_routes);

module.exports = app;