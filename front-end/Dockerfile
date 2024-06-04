FROM node:latest as build
WORKDIR /app
COPY . . 
RUN npm ci && npm run build

FROM nginx:1.27.0-alpine
WORKDIR /app
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/
EXPOSE 80
