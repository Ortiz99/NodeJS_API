const User = require('../models/Student');

function create(req, res) {
    var user = new User();
    var params = req.body;

    user.name = params.name;
    user.lastname = params.lastname;
    user.age = params.age;
    user.email = params.email;
    user.address = params.address;
    user.phone = params.phone;

    user.save((err, userCreated) => {
        if (err) {
            res.status(500).send({
                statusCode: 500,
                message: 'Server Error'
            });
        } else {
            if (!userCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: 'Error Saving Student'
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: 'Student Save Successfully',
                    dataUser: userCreated
                })
            }
        }

    });
}

function update(req, res) {
    var parameters = req.body;
    var id_student = req.params.id;

    User.findByIdAndUpdate(id_student, parameters, { new: true }, (err, userUpdated) => {
        if (err) {
            res.status(500).send({
                statusCode: 500,
                message: 'Server Error',
                error: err
            })
        } else {
            if (!userUpdated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error Updating"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: 'Student Updated Successfully',
                    user: userUpdated
                })
            }
        }
    });
}

function remove(req, res) {
    var student_id = req.params.id;

    User.findByIdAndDelete(student_id, (err, userRemoved) => {
        if (err) {
            res.status(500).send({
                statusCode: 500,
                message: 'Server Error',
                error: err
            })
        } else {
            if (!userRemoved) {
                res.status(400).send({
                    statusCode: 400,
                    message: 'Error Removing Student'
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: 'Student Deleted Successfully',
                    userRemoved: userRemoved
                })
            }
        }

    })
}

function getAllStudents(req, res) {
    User.find({}, (err, students) => {
        if (err) {
            res.status(500).send({
                statusCode: 500,
                message: 'Server Error'
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: 'Users',
                students: students
            })
        }
    });

}

function getStudent(req, res) {
    student_id = req.params.id;

    User.findById(student_id, (err, user) => {
        if (err) {
            res.status(500).send({
                statusCode: 500,
                message: 'Server Error',
                error: err
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                user: user
            })
        }
    })
}

module.exports = {
    create,
    update,
    remove,
    getAllStudents,
    getStudent
}