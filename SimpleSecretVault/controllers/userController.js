const UserModel = require('../models/userModel');

class UserController{
    static checkUserExistence(req, res){
        const username = req.params.username;
        UserModel.checkIfExists(username, (exists) => {
            res.status(200).send({ exists });
        });
    }

    static createUser(req, res){
        const username = req.body.username;
        UserModel.create(username, (result) => {
            res.status(200).send({ message: 'User created successfully' });
        });
    }
    
}

module.exports = UserController
