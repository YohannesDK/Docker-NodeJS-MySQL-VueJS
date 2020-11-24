FROM node:lts-alpine

WORKDIR /server

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

RUN npm run build

COPY . .

EXPOSE 3000

CMD [ "node", "src/api.ts" ]