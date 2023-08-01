FROM node:18.16.1-alpine

WORKDIR /app/test

COPY package*.json ./
## install depndency & code files
RUN npm i 

COPY . .

ENV PORT=3003

EXPOSE 3003
## run the node 
CMD ['npm','start'] or node ./dist/app.js