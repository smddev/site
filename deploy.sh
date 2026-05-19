#!/bin/bash

set -e
SCRIPT_DIR=$(dirname $0)
cd "$SCRIPT_DIR"

APP=smddev-site
REGISTRY=cr.yandex/crp46a0luhotq8n2jaq6
SERVICE_ACCOUNT_ID=ajentipdangkhd0vv4l3

DOCKER_BUILDKIT=1
export DOCKER_BUILDKIT

docker build -t  $APP  .
docker tag $APP $REGISTRY/$APP
docker push $REGISTRY/$APP

yc serverless container revision deploy \
  --container-name $APP \
  --image $REGISTRY/$APP:latest \
  --service-account-id $SERVICE_ACCOUNT_ID \
  --folder-id b1guh2djp0dk8ao4hla8 \
  --execution-timeout 60s \
  --network-id enpcq3df1vv1l1kvcs53 \
  --memory 256MB \
  --environment AUTH_USER=${AUTH_USER:-admin} \
  --environment AUTH_PASSWORD=${AUTH_PASSWORD:-changeme}

yc serverless container --folder-id b1guh2djp0dk8ao4hla8 get $APP