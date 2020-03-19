FROM node:10-alpine

RUN mkdir -p /home/margarita/Documents/intership/goodWeather/node_modules && chown -R node:node /home/margarita/Documents/intership/goodWeather

WORKDIR /home/margarita/Documents/intership/goodWeather

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

CMD [ "node", "index.js" ]