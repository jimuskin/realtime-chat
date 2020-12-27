# Realtime Server

This is the server which handles the client requests. It is responsible for maintaining lobby states, and communication with the database.

## ENV Config
Demonstrated below is the necessary values present within the ENV file:

```PORT``` The port which the express server/socketio connection will run on.

```REDIS_IP``` The IP address of the Redis database

```REDIS_PORT``` The port of the Redis database

```MONGODB_URI``` The URI of the Mongo database

### Example ENV file (Docker configuration)
Demonstrated below is an example ENV file configured for a docker container. 
```
PORT=8080

REDIS_IP="redis"
REDIS_PORT=6379

MONGODB_URI="mongodb://localhost:password@mongo:27017"
```