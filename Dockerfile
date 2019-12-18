FROM node:13

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm audit fix --force
RUN npm dist

EXPOSE 8082
CMD [ "npm start"]
