FROM node:8.11-alpine as app
WORKDIR /usr/app
COPY package.json .
COPY src .
RUN npm install --production --silent && npm run build


# Final image
FROM node:8.11-alpine
WORKDIR /usr/app
COPY --from=app /usr/app/dist ./
CMD ["node", "dist/main.js"]
