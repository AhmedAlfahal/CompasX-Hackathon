FROM alpine:3.18

# Update System and Install Tools
RUN apk update
RUN apk add mariadb mariadb-common mariadb-client openrc

# start openrc
RUN openrc
RUN touch /run/openrc/softlevel


# Copy installing script and make it executable
ADD ./tools/run.sh .
ADD ./tools/user.sql .
RUN chmod +x /run.sh
EXPOSE 3306

ENTRYPOINT [ "./run.sh" ]