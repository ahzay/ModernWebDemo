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

### Setting up the MySQL Database in Docker

This section assumes Docker is set up correctly to run from the user account. Use the provided script `run.sh` to automatically build the Docker image and run the container. This script will also create a data directory for MariaDB next to the Dockerfile. Ensure you have `Dockerfile` and `init.sql` in the same directory as `run.sh`.

```bash
./run.sh
```

This script performs the following actions:

- Creates a data directory for MariaDB if it doesn't exist.
- Sets the correct permissions for the data directory.
- Builds a custom Docker image with MariaDB and the necessary initializations.
- Runs the Docker container with the MariaDB service.

Note: Before running `run.sh`, ensure it has execute permissions (`chmod +x run.sh`). The script needs to be run from the directory where it's located.

### Usage

- In a first terminal:
   1. Navigate to the Docker directory: `cd SimpleSecretVault/DOCKER`
   2. Modify run permissions: `sudo chmod +x run.sh`
   3. Run the script: `./run.sh`
- In a second terminal:
   1. Navigate to the application directory: `cd SimpleSecretVault`
   2. Install npm modules: `npm install`
   3. Start the server:
      - Command line: `npm start`
      - VSCode: Press `F5`
