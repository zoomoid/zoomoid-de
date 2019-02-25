FROM node:latest

# install server dependencies
WORKDIR /
# copy package files
COPY package*.json .
RUN npm install --quiet

# install client dependencies
WORKDIR /client
COPY /client/package*.json .
RUN npm install --quiet

# bundle all files
WORKDIR /
COPY . .

# build client
WORKDIR /client
RUN npm run build

# run server
WORKDIR /
CMD ["npm", "start"]
