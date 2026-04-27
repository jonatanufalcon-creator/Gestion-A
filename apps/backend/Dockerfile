# Use official Node.js image as the build stage
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight image for production
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy built application from build stage
COPY --from=build /app .

# Expose port (replace with your actual port)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]