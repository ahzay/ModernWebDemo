const userModel = require("../models/userModel");
const postModel = require("../models/postModel");

class PostController {
    static newPost(req, res) {
        const username = req.params.username;
        // Call the checkIfExists method and store the result in a boolean variable
        let exists = false;
        userModel.checkIfExists(username, result_checkIfExists => { // callback style because async
            exists = result_checkIfExists;
            console.log(`Hashed user ${username} exists: ${exists}`);
            // the following code should only be called in the callback (when checking that exists is done)
            if (exists) { // nothing
            } else {
                userModel.create(username, (result_create) =>{
                    console.log('User created successfully');
                });
            }

        });
    }

    static getPosts(req, res) {



    }

}