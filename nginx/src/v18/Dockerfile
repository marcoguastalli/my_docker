FROM nginx:1.31.2-alpine

# Upgrade packages
RUN apk update && apk upgrade && rm -rf /var/cache/apk/*

# Copy files
COPY certs /usr/share/nginx/certs/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx html /usr/share/nginx/html/

# Expose ports
EXPOSE 443
