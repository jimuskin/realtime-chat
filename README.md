# Realtime Chat

A simple chatroom with realtime client-server communication. Users are able to create their own private chat rooms, and join other rooms via a 6 digit code.

## SETTING UP

Docker and Docker-Compose are required to be installed prior to setting this up.
First clone the repository, rename the .env.template files (found in `"/"` , `"./client"` and `"./server"`), and adjust the values.

### Run in Production Mode:

`docker-compose up --build -d`
Alternatively, run the `prod.sh` script.

### Run locally:

If you wish to run this project locally, the following command will set up a development environment which allows you to make live changes.

`docker-compose -f docker-compose.yml -f docker-compose-development.yml up --build -d`
Alternatively, run the `dev.sh` script.
