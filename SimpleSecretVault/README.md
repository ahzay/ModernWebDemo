# Simple Secret Vault

This application demonstrates secure storage and retrieval of posts using encryption, where each user's username (kept secret) is used as the key for encryption and decryption. It features a front-end HTML form and a Node.js server with a MySQL database.

## Features

- Implements MVC.

   ```(lua)
   /SimpleSecretVault
   |-- /node_modules
   |-- /routes
   |   |-- users.js
   |   |-- staticRoutes.js
   |-- /public
   |   |-- script.js
   |   |-- index.html
   |-- /controllers
   |   |-- userController.js
   |-- /models
   |   |-- userModel.js
   |   |-- postModel.js
   |-- server.js
   |-- package.json
   ```

- Utilizes lightweight Express middleware for efficient request handling and routing.
- Implements AES encryption for secure storage of user posts, using a combination of the user's secret username and a unique salt per post for key derivation.
- Encryption and decryption happens client-side, the server has no access to decrypted data.
- The username (which is also the key) is hashed and sent to the server to identify posts.

## Getting Started

### Setting up the MySQL Database

1. **Create a User 'dbuser' with Password 'dbuserpass'**

   Log in to MySQL/MariaDB as root:

   ```sql
   mysql -u root -p
   ```

   Then create 'dbuser':

   ```sql
   CREATE USER 'dbuser'@'localhost' IDENTIFIED BY 'dbuserpass';
   ```

2. **Create a Database 'usersdb'**

   Create the 'usersdb' database:

   ```sql
   CREATE DATABASE IF NOT EXISTS usersdb;
   ```

3. **Create Tables in 'usersdb'**

   Create the 'users' table:

   ```sql
   USE usersdb;
   CREATE TABLE IF NOT EXISTS users (
       username VARCHAR(255) PRIMARY KEY
   );
   ```

   Create the 'posts' table:

   ```sql
   CREATE TABLE IF NOT EXISTS posts (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(255) NOT NULL,
       encryptedPost TEXT NOT NULL,
       iv VARCHAR(255) NOT NULL,
       salt VARCHAR(255) NOT NULL,
       FOREIGN KEY (username) REFERENCES users(username)
   );
   ```

4. **Grant Privileges to 'dbuser'**

   Grant 'dbuser' all privileges on 'usersdb':

   ```sql
   GRANT ALL PRIVILEGES ON usersdb.* TO 'dbuser'@'localhost';
   FLUSH PRIVILEGES;
   ```

   Exit MySQL/MariaDB:

   ```sql
   EXIT;
   ```

### Usage

1. Navigate to the application directory: `cd SimpleSecretVault`
2. Install npm modules: `npm install`
3. Start the server:
   - Command line: `npm start`
   - VSCode: Press `F5`
