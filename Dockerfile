FROM node:alpine as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

FROM node:alpine as deps

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production

FROM node:16-alpine as server

WORKDIR /app

COPY package.json yarn.lock ./

COPY --from=builder /app/.next/ /app/.next/

COPY --from=deps /app/node_modules/ /app/node_modules/

COPY public /app/public/ 

EXPOSE 3000

CMD ["yarn", "start"]