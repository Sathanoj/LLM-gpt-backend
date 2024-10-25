FROM node:20.18.0-alpine3.20

WORKDIR /backend-gpt

COPY . .

RUN npm install

EXPOSE 3001

CMD ["node", "index.js"]