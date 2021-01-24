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

module.exports = {
    create
}