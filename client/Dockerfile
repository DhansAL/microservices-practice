FROM node:16-alpine
# node17 has issues with CRA(create-react-app) so using v16 for the time being

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD [ "npm","start" ]