## Stage 1
FROM node:19-alpine3.17 as builder

WORKDIR /app

ADD package.json package-lock.json tsconfig.json ./
ADD ./src ./src

RUN ls
RUN npm install
RUN npm run build


# Stage 2
FROM node:19-alpine3.17

WORKDIR /app

ADD package.json package-lock.json tsconfig.json ./

# ignore-script option disables scripts like Husky
RUN npm ci --omit=dev --ignore-scripts

COPY --from=builder /app/dist/ ./dist/

EXPOSE 3000

CMD ["npm","run","start"]