# Stage 1: Build Stage
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /build

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the application source code
COPY . . 

# Build the application (if needed; e.g., for TypeScript or bundling)
RUN yarn run build

# Stage 2: Production Stage
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only the production dependencies from the builder stage
COPY --from=builder /build/package.json /app/package.json
COPY --from=builder /build/yarn.lock /app/yarn.lock
COPY --from=builder /build/node_modules /app/node_modules
# COPY --from=builder /build/.env /app/.env
# Copy the application code from the builder stage
COPY --from=builder /build/dist /app/dist

# Expose the port your app runs on
EXPOSE 3005

# Define the command to start the application
CMD ["yarn", "start"]
