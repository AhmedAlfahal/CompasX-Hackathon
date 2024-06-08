# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clean npm cache and install dependencies

# Copy the rest of the application code
COPY . .

# Expose port 80
EXPOSE 3000

RUN chmod +x entrypoint.sh

CMD ["./entrypoint.sh"]