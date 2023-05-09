# Use the official Node.js LTS (Long Term Support) version as the base image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) into the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the application code into the working directory
COPY . .

# Expose the default React development port
EXPOSE 4200

# Generate openapi connections
CMD ["npm", "run", "generate-openapi-connections"]

# Start the React development server
CMD ["npm", "start"]