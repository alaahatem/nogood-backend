# Use official Node.js image as base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install Prisma CLI (if not already included in package.json scripts)
RUN npm install prisma --save-dev

# Copy source code to container
COPY . .

# Run Prisma generate 
RUN npx prisma generate

# Build the application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Command to start the application and migrate deploy to set up the database
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]
