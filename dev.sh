#! /usr/bin/env bash

echo "RUNNING APPLICATION IN DEV MODE WITH DOCKER"

sleep 2

echo "USING MOUNTS INSTEAD OF VOLUMES"

sleep 2

echo "CONTAINER GETS DELETED AFTER STOPPING IT"

sleep 2

echo "PREPARING THE DOCKER CONTAINER"

docker build -f ./.docker/dev.dockerfile -t angularcoredev .

echo "INSTALLING DEPENDENCIES"

npm install

echo "BUILDING THE APPLICATION"

docker run --rm -d --mount type=bind,source="$(pwd)",target=/app -p 8080:80 angularcoredev

npm run watch