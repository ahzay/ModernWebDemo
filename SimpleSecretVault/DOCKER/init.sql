-- Create user
CREATE USER 'dbuser'@'%' IDENTIFIED BY 'dbuserpass';

-- Create database
CREATE DATABASE IF NOT EXISTS usersdb;

-- Create tables in usersdb
USE usersdb;
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255) PRIMARY KEY
);
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    encryptedPost TEXT NOT NULL,
    iv VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    FOREIGN KEY (username) REFERENCES users(username)
);

-- Grant privileges to dbuser
GRANT ALL PRIVILEGES ON usersdb.* TO 'dbuser'@'%';
FLUSH PRIVILEGES;
