FROM node:alpine as builder

WORKDIR /app

COPY package.json .
COPY .yarnrc.yml .
COPY .yarn/ .yarn/

RUN yarn set version berry

RUN yarn install

COPY . .

RUN yarn build

FROM node:alpine as deps

WORKDIR /app

COPY package.json .yarnrc.yml ./
COPY .yarn/ .yarn/

RUN yarn set version berry

RUN yarn install 

FROM node:20-alpine as server

WORKDIR /app

COPY package.json .yarnrc.yml ./
COPY .yarn/ .yarn/

COPY --from=builder /app/.next/ /app/.next/

COPY --from=deps /app/node_modules/ /app/node_modules/

COPY public /app/public/ 

EXPOSE 3000

CMD ["yarn", "start"]