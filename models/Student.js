const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var student_schema = new Schema({
    name: String,
    lastname: String,
    age: Number,
    email: String,
    address: String,
    phone: Number
});

module.exports = mongoose.model('student', student_schema);