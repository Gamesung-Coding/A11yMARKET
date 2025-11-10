# 1. Build
# Use node 22 slim image as build stage
FROM node:22-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .
RUN npm run build

# 2. Final stage
# Use nginx alpine image as final stage
FROM nginx:1.29.3-alpine-slim AS final

# Copy built files from builder stage to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]