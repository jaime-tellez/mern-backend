
FROM node:14-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD ["node", "index.js"]
