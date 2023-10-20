# Base image
FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package.json ./

# If you are using yarn, copy yarn.lock instead
# COPY package.json yarn.lock ./

RUN npm install
# If you are using yarn, then use the command below instead
# RUN yarn install

# Bundle app source
COPY . .

# Transpile TypeScript to JavaScript
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
