# Use a Node.js base image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for the final stage
FROM node:20-alpine AS runner

WORKDIR /app

# Copy necessary files from the build stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/public ./public

# Expose the port Next.js runs on
EXPOSE 3000

# Set the command to start the application
CMD ["npm", "start"]