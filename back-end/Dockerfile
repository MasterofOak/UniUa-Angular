FROM node:latest
WORKDIR /app
EXPOSE 5000
COPY . .
RUN npm ci
CMD ["node","index.js"]
