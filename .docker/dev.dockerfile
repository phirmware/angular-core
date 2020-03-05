# FROM node:10-alpine AS installer

# WORKDIR /app

# COPY ./package*.json ./

# RUN npm install

FROM nginx:alpine

COPY ./.docker/dev.nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /app

COPY  . .

