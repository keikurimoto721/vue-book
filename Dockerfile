FROM node:10.15-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm @vue/cli
