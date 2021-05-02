# Base Image - ubuntu latest
FROM node

# Copy Workdir contents
WORKDIR /app

COPY . .

# Create a Build
RUN npm install
RUN npm run client:install

EXPOSE 3000

CMD npm run server