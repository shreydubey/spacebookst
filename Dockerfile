# Base Image - ubuntu latest
FROM node

# Copy Workdir contents
WORKDIR /app

COPY . .

# Create a Build
RUN npm install
RUN npm run client:install


CMD npm run spacebook