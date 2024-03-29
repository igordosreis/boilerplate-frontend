FROM node:16.14-alpine

WORKDIR /frontend-app

EXPOSE 3000

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]