const mysql = require('mysql');
const errors = require('./dberrors');

// Database and table variables
const dbUser = 'dbuser';        // Replace with your database username
const dbPassword = 'dbuserpass';    // Replace with your database password
const dbName = 'usersdb';      // Specify the database name
const tableNames = ['users', 'posts']; // Specify the table names

const connection = mysql.createConnection({
  host: 'localhost',
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

// Connect to MySQL
connection.connect(error => {
  if (error) throw error; // If there's an error in connection, throw it
  console.log("Successfully connected to MySQL server."); // Log success message

  // Check the existence of each specified table in the specified database
  for (const tableName of tableNames) {
    errors.checkTableExists(connection, tableName, (err, tableExists) => {
      if (err) {
        throw err;
      }
      if (tableExists) {
        console.log(`The '${tableName}' table exists in the '${dbName}' database.`);
      } else {
        throw new Error(`The '${tableName}' table does not exist in the '${dbName}' database.`);
      }
    });
  }

  // Check permissions for the specified user on the specified database
  // errors.checkUserPermissions(connection, dbName, dbUser, err => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(`'${dbUser}' has all necessary permissions for '${dbName}'.`);
  // });
});

module.exports = connection;
