FROM node:latest
WORKDIR /src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 9999
CMD ["npm", "start"]