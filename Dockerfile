FROM node:20-alpine3.17

WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm install
RUN npm install -g serve

RUN npm run build

CMD [ "serve", "-s", "build" ]