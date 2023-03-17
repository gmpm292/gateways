FROM node:18.15.0-buster as builder

ENV NODE_ENV build

USER root
RUN apt-get update && apt-get install rsync -y

USER node
WORKDIR /home/node

COPY package*.json ./
RUN npm ci

COPY --chown=node:node . .
RUN npm run build
RUN npm run rsync:graphql
RUN npm prune --production

# ---

FROM node:18.15.0-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

CMD ["node", "dist/main.js"]