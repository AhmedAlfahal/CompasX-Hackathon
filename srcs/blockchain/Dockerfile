FROM alpine:3.18

RUN apk update && \
    apk add nodejs npm yarn

WORKDIR /app

COPY  . .

EXPOSE 8545

RUN chmod +x ./scripts/entrypoint.sh

CMD ["./scripts/entrypoint.sh"]
