# Multi-stage Dockerfile for React Static application
# Stage 1: Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Accept build arguments (both are build-time variables)
# LANG is used during build process for static site generation
# ASSISTENT_URL is embedded into the JavaScript bundle during build
ARG ASSISTENT_URL=https://d5dm1rimoau6ko74au59.svoluuab.apigw.yandexcloud.net
ARG LANG=en

# Set environment variables from build args for build process
ENV ASSISTENT_URL=${ASSISTENT_URL}
ENV LANG=${LANG}

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application with the specified language and assistant URL
RUN npm run build

# Stage 2: Production stage
FROM nginx:alpine AS production

# Install Node.js for serving the static site (react-static uses serve)
RUN apk add --no-cache nodejs npm

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Start the application using serve with runtime PORT support
CMD ["npm", "run", "serve"]