#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Get the current working directory
CURRENT_DIR="$(pwd)"

# Compare the two directories
if [ "$SCRIPT_DIR" != "$CURRENT_DIR" ]; then
    echo "Error: This script must be run from its own directory."
    echo "Please change to '$SCRIPT_DIR' and try again."
    exit 1
fi

# Define the data directory
DATA_DIR="./mariadb_data"

# Check if the data directory exists, if not, create it
if [ ! -d "$DATA_DIR" ]; then
    echo "Creating data directory..."
    mkdir -p "$DATA_DIR"
fi

# Set the correct permissions
echo "Setting permissions for data directory..."
sudo chown -R 100:101 "$DATA_DIR"

# Build the Docker image
echo "Building Docker image..."
docker build -t custom-mariadb .

# Run the Docker container
echo "Running Docker container..."
docker run --detach --name some-mariadb \
    --env MARIADB_ROOT_PASSWORD=my-secret-pw \
    --volume "$(pwd)/mariadb_data:/var/lib/mysql" \
    --publish 3306:3306 \
    custom-mariadb
