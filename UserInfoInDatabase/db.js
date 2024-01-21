const mysql = require('mysql');

// Configure MySQL connection with the 'usersdb' database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',     // replace with your database username
    password: 'dbuserpass', // replace with your database password
    database: 'usersdb' // specify the database to connect to
});

// Connect to MySQL
connection.connect(error => {
    if (error) throw error; // If there's an error in connection, throw it
    console.log("Successfully connected to MySQL server."); // Log success message

    // Check if the 'users' table exists in the 'usersdb' database
    connection.query('SHOW TABLES LIKE "users"', (err, rows) => {
        if (err) throw err;

        if (rows.length > 0) {
            console.log("The 'users' table exists in the 'usersdb' database.");
        } else {
            throw new Error("The 'users' table does not exist in the 'usersdb' database.");
        }
    });
});

module.exports = connection;
