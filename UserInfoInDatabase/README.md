# Simple Database Application

This is a simple web application that demonstrates basic interactions between a front-end HTML form and a Javascript server using a MySQL database.

## Features

- Uses a clean modular structure that incorporates controllers, models and routes. MVC architecture for web development that separates applications into Model (data and logic), View (user interface), and Controller (interaction and logic).

   ```(lua)
   /your-app
   |-- /node_modules
   |-- /routes
   |   |-- users.js
   |   |-- static.js
   |-- /public
   |   |-- form.js
   |   |-- index.html
   |-- /controllers
   |   |-- userController.js
   |-- /models
   |   |-- userModel.js
   |-- server.js
   |-- package.json
   ```

- Makes use of lightweight middleware for request preprocessing and endpoint handling (express node package).

## Getting started

### Setting up the MySQL Database

1. **Create a User 'dbuser' with Password 'dbpass'**

   Log in to MySQL/MariaDB as the root user:

   ```sql
   mysql -u root -p
   ```

   Provide the root user's password when prompted. Then, create 'dbuser' with 'dbpass':

   ```sql
   CREATE USER 'dbuser'@'localhost' IDENTIFIED BY 'dbuserpass';
   ```

2. **Create a Database 'usersdb'**

   After creating 'dbuser', create a database named 'usersdb':

   ```sql
   CREATE DATABASE IF NOT EXISTS usersdb;
   ```

3. **Create a Table 'users' in 'usersdb'**

   Switch to 'usersdb' and create the 'users' table:

   ```sql
   USE usersdb;
   CREATE TABLE IF NOT EXISTS users (
       username VARCHAR(255) PRIMARY KEY
   );
   ```

4. **Grant All Privileges to 'dbuser' on 'usersdb'**

   Finally, grant all privileges to 'dbuser' for 'usersdb':

   ```sql
   GRANT ALL PRIVILEGES ON usersdb.* TO 'dbuser'@'localhost';
   ```

   This grants all privileges on the 'usersdb' database to 'dbuser' when connecting from 'localhost'.

5. **Flush Privileges**

   To apply the changes, don't forget to flush the privileges:

   ```sql
   FLUSH PRIVILEGES;
   ```

   This ensures that the privileges are updated and take effect immediately.

6. **Exit MySQL/MariaDB**

   You can now exit the MySQL/MariaDB shell:

   ```sql
   EXIT;
   ```

   You've created 'dbuser', the 'usersdb' database, and granted all privileges to 'dbuser' on 'usersdb'.

### Usage

1. Navigate to the project directory: `cd UserInfoInDatabase`
2. Install required npm modules `npm install`
3. Start the server
    - in the command line: `npm start`
    - using vscode: press `F5`
