# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files into the container
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]