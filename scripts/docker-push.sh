#!/bin/sh

REPOSITORY_DOMAIN=ghcr.io
REPOSITORY_ORGANIZATION=musma
REPOSITORY_PREFIX=$REPOSITORY_DOMAIN/$REPOSITORY_ORGANIZATION
NORMALIZED_PACKAGE_NAME=$(echo $npm_package_name | tr -d '@')
IMAGE_TAG=$REPOSITORY_PREFIX/$NORMALIZED_PACKAGE_NAME:latest

docker build -t $NORMALIZED_PACKAGE_NAME --platform=linux/amd64 .
docker tag $NORMALIZED_PACKAGE_NAME:latest $IMAGE_TAG
docker push $IMAGE_TAG