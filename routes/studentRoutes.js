const express = require('express');
const api = express.Router();
const StudentController = require('../controllers/StudentController');

/**
 * GET
 */

api.get('/', () => {
    console.log('juju');
})

/**
 * POST
 */
api.post('/saveStudent', StudentController.create);


module.exports = api;