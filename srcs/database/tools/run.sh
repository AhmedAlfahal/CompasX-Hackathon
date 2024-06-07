#!/bin/sh

if [ ! -f "/var/lib/mysql/ib_buffer_pool" ];
then
	/etc/init.d/mariadb setup
	rc-service mariadb start

    # Check if MariaDB service is already running
    if rc-service mariadb status; then
        echo "MariaDB is already running."
    else
        rc-service mariadb start
    fi  


    # Create local user and database for wordpress
	mysql -u ${MYSQL_ROOT_USER} -e "CREATE USER '${DATABASE_USER}'@'localhost' IDENTIFIED BY '${DATABASE_PASS}';"
	mysql -u ${MYSQL_ROOT_USER} -e "GRANT ALL PRIVILEGES ON *.* TO '${DATABASE_USER}'@'localhost' WITH GRANT OPTION;"
	mysql -u ${MYSQL_ROOT_USER} -e "FLUSH PRIVILEGES;"
    mysql -u ${DATABASE_USER} -p${DATABASE_PASS} < user.sql

	# Create new remote user and Make The user GRANT ALL PRIVILEGES on Wordpress database
	mysql -u ${MYSQL_ROOT_USER} -e "CREATE USER '${DATABASE_USER}'@'%' IDENTIFIED BY '${DATABASE_PASS}';"
	mysql -u ${MYSQL_ROOT_USER} -e "GRANT ALL PRIVILEGES ON ${DATABASE_NAME}.* TO '${DATABASE_USER}'@'%' IDENTIFIED BY '${DATABASE_PASS}' WITH GRANT OPTION;"
	mysql -u ${MYSQL_ROOT_USER} -e "FLUSH PRIVILEGES;"

	mysql -u ${MYSQL_ROOT_USER} -e "ALTER USER '${MYSQL_ROOT_USER}'@'localhost' IDENTIFIED BY '${MYSQL_ROOT_PASS}';"
	    # Run SQL script to initialize or update database schema or data

fi


# # Comment skip-networking
sed -i 's/skip-networking/# skip-networking/g' /etc/my.cnf.d/mariadb-server.cnf
sed -i 's/#bind-address=0.0.0.0/bind-address=0.0.0.0/g' /etc/my.cnf.d/mariadb-server.cnf

rc-service mariadb restart
rc-service mariadb stop


# # Running This Command "/usr/bin/mariadbd" to stay running in the foreground
/usr/bin/mariadbd --basedir=/usr --datadir=/var/lib/mysql --plugin-dir=/usr/lib/mariadb/plugin --user=mysql --pid-file=/run/mysqld/mariadb.pid