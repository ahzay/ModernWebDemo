FROM mariadb:latest

# Copy the initialization script to the Docker entrypoint (it will be executed on container start)
COPY ./init.sql /docker-entrypoint-initdb.d/
