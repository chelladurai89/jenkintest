# Use the Node.js 18 LTS as a base image
FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and lock files to leverage Docker's caching mechanism
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn run build

# Use a lightweight image for production
FROM node:18-alpine AS runner

# Set working directory in production
WORKDIR /app

# Copy only the necessary files from the previous build stage
COPY --from=base /app/package.json /app/package-lock.json* yarn.lock* ./
COPY --from=base /app/.next /app/.next
COPY --from=base /app/public /app/public
COPY --from=base /app/node_modules /app/node_modules

# Set environment variable to production
ENV NODE_ENV=production

# Expose the port the Next.js app runs on
EXPOSE 4001

# Command to run the app
CMD ["yarn", "start"]
