FROM node:12
WORKDIR /app
COPY ./ ./
RUN npm config rm proxy
RUN npm config rm https-proxy
RUN npm install
WORKDIR /app/frontend
RUN npm install
RUN npm run build
RUN cp -r ./dist ./../spaBuild
WORKDIR /app
EXPOSE 11011
CMD [ "npm", "run", "serve" ]