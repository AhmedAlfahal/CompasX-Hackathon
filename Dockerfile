# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clean npm cache and install dependencies
RUN npm install
RUN npm install styled-components
RUN npm install react-router-dom@6

# Copy the rest of the application code
COPY . .

# Expose port 80
EXPOSE 3000

# Start the Nginx server
CMD ["npm", "start"]

# docker build -t app .
# docker run -p 3000:3000 app