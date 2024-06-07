FROM alpine:3.18

RUN apk update && \
    apk add nodejs npm yarn mariadb-client

WORKDIR /app

COPY . .

EXPOSE 5000

RUN chmod +x ./scripts/entrypoint.sh

ENTRYPOINT ["./scripts/entrypoint.sh"]

# CMD ["sleep", "99999999"]
