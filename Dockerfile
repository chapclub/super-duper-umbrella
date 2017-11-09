FROM node:8

# Create the app source dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install the app dependencies
COPY package.json /usr/src/app/
RUN yarn install

# Bundle app src
COPY . /usr/src/app

ENV PORT=6969

# Let the docker daemon bind to port 6969
EXPOSE 6969

# The command to run the app itself
CMD ["yarn", "start"]
