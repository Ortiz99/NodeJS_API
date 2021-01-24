const express = require('express');
const api = express.Router();
const StudentController = require('../controllers/StudentController');

//ROUTES


/**
 * GET
 */
api.get('/students', StudentController.getAllStudents);
api.get('/student/:id', StudentController.getStudent);


/**
 * POST
 */
api.post('/saveStudent', StudentController.create);


/**
 * PUT
 */
api.put('/updateStudent/:id', StudentController.update);


/**
 * DELETE
 */
api.delete('/deleteStudent/:id', StudentController.remove)


module.exports = api;