# Docker Setup for SMDDev Site

This document provides instructions for building and running the SMDDev site using Docker.

## Build Arguments

The Dockerfile accepts two build-time arguments that are embedded into the static build:

- `ASSISTENT_URL`: URL for the chatbot assistant API (default: `https://d5dm1rimoau6ko74au59.svoluuab.apigw.yandexcloud.net`) - **Build-time only**
- `LANG`: Language for the application (default: `en`, supports: `en`, `ru`) - **Build-time only**

**Important**: Both variables are embedded during the build process and cannot be changed at runtime. To use different values, you must rebuild the Docker image.

## Building the Docker Image

### Basic Build (using defaults)

```bash
docker build -t smddev-site .
```

### Build with Custom Arguments

```bash
# Build with custom assistant URL and language
docker build \
  --build-arg ASSISTENT_URL=https://your-api-endpoint.com \
  --build-arg LANG=ru \
  -t smddev-site .
```

### Build for Different Languages

```bash
# English version
docker build --build-arg LANG=en -t smddev-site:en .

# Russian version
docker build --build-arg LANG=ru -t smddev-site:ru .
```

## Running the Container

### Basic Run

```bash
docker run -p 3000:3000 smddev-site
```

### Note on Runtime Configuration

Since both `ASSISTENT_URL` and `LANG` are embedded during build time, they cannot be changed at runtime. The container will use the values that were specified during the build process.

### Run in Background

```bash
docker run -d -p 3000:3000 --name smddev-site smddev-site
```

## Docker Compose (Optional)

Create a `docker-compose.yml` file:

```yaml
version: "3.8"
services:
  smddev-site:
    build:
      context: .
      args:
        ASSISTENT_URL: https://d5dm1rimoau6ko74au59.svoluuab.apigw.yandexcloud.net
        LANG: en
    ports:
      - "3000:3000"
    environment:
      - ASSISTENT_URL=https://d5dm1rimoau6ko74au59.svoluuab.apigw.yandexcloud.net
      - LANG=en
    restart: unless-stopped
```

Run with:

```bash
docker-compose up -d
```

## Multi-Architecture Build

For deployment across different architectures:

```bash
# Build for multiple platforms
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  --build-arg ASSISTENT_URL=https://d5dm1rimoau6ko74au59.svoluuab.apigw.yandexcloud.net \
  --build-arg LANG=en \
  -t smddev-site:latest \
  --push .
```

## Health Check

The container includes a health check that verifies the application is responding on port 3000. You can check the health status:

```bash
docker ps
# Look for the health status in the STATUS column
```

## Troubleshooting

### Check Container Logs

```bash
docker logs smddev-site
```

### Access Container Shell

```bash
docker exec -it smddev-site sh
```

### Verify Environment Variables

```bash
docker exec smddev-site env | grep -E "(ASSISTENT_URL|LANG)"
```

## Production Considerations

1. **Security**: Ensure ASSISTENT_URL uses HTTPS in production
2. **Resource Limits**: Set appropriate memory and CPU limits
3. **Monitoring**: Implement proper logging and monitoring
4. **Backup**: Regular backups of any persistent data
5. **Updates**: Plan for rolling updates with zero downtime

## File Structure

The Docker setup includes:

- `Dockerfile`: Multi-stage build configuration
- `.dockerignore`: Excludes unnecessary files from build context
- `DOCKER.md`: This documentation file

## Environment Variables Reference

| Variable        | Description          | Default                                                       | Required |
| --------------- | -------------------- | ------------------------------------------------------------- | -------- |
| `ASSISTENT_URL` | Chatbot API endpoint | `https://d5dm1rimoau6ko74au59.svoluuab.apigw.yandexcloud.net` | No       |
| `LANG`          | Application language | `en`                                                          | No       |

Supported languages: `en` (English), `ru` (Russian)
