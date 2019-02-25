FROM node:latest

# copy all source files to container
COPY . .

# install client dependencies
WORKDIR ./client/
RUN npm install --quiet
# build client
RUN npm run build
# install server dependencies
WORKDIR ./
RUN npm install --quiet
# run server
CMD ['npm', 'start']
