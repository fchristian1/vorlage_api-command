FROM node:lts-slim AS builder
COPY package*.json .
COPY tsconfig.json .
RUN apt-get update && apt-get install openssl -y
RUN npm install
COPY ./src ./src
RUN npm run build
RUN npm run ssl
FROM node:lts-slim AS runner
WORKDIR /app
COPY --from=builder ./build .
COPY --from=builder ./node_modules ./node_modules
COPY --from=builder server.* .
COPY env .
EXPOSE 3000
CMD node index.js