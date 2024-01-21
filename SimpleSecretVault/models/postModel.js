const db = require('../db/db');

class PostModel {
    static createPost(username, encryptedData, iv, salt, callback) {
        const query = 'INSERT INTO posts (username, encryptedPost, iv, salt) VALUES (?, ?, ?, ?)';
        db.query(query, [username, encryptedData, iv, salt], (err, result) => {
            if (err) throw err;
            callback(result.insertId);
        });
    }

    static getPostById(id, username, callback) {
        const query = 'SELECT encryptedPost, iv, salt FROM posts WHERE id = ? AND username = ?';
        db.query(query, [id, username], (err, results) => {
            if (err) throw err;
            if (results.length > 0) {
                callback(results[0]);
            } else {
                callback(null);
            }
        });
    }

    static getPostsByUser(username, callback) {
        const query = 'SELECT id, encryptedPost, iv, salt FROM posts WHERE username = ?';
        db.query(query, [username], (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }
}

module.exports = PostModel;
