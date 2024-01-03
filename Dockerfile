FROM node:alpine as builder

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

RUN yarn rebuild && yarn build

FROM node:20-alpine as server

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/package.json ./package.json

RUN rm -rf /app/.yarn/unplugged && yarn rebuild

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]