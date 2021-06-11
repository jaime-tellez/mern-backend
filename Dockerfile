
FROM node:14-alpine
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
# TypeScript
RUN npm run tsc

EXPOSE 3000
CMD [ "npm", "start" ]
