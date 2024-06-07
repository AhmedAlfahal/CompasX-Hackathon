FROM alpine:3.18

RUN apk update && \
    apk add nodejs npm yarn

WORKDIR /app

COPY . .

EXPOSE 3000

RUN chmod +x ./scripts/entrypoint.sh

ENTRYPOINT ["./scripts/entrypoint.sh"]
