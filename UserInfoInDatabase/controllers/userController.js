const userModel = require('../models/userModel');

const checkUserExistence = (req, res) => {
    const username = req.params.username;
    userModel.checkIfExists(username, (exists) => {
        res.status(200).send({ exists });
    });
};

const createUser = (req, res) => {
    const username = req.body.username;
    userModel.create(username, (result) => {
        res.status(200).send({ message: 'User created successfully' });
    });
};

module.exports = {
    checkUserExistence,
    createUser
};
