
all: build up

build:
	docker-compose -f ./srcs/docker-compose.yml build

up:
	docker-compose -f ./srcs/docker-compose.yml up -d

down:
	docker-compose -f ./srcs/docker-compose.yml down -v

start:
	docker-compose -f ./srcs/docker-compose.yml start

stop:
	docker-compose -f ./srcs/docker-compose.yml stop

logs:
	docker-compose -f ./srcs/docker-compose.yml logs

clean: stop down
	rm -fr srcs/frontend/node_modules srcs/blockchain/node_modules srcs/backend/node_modules

fclean: clean
	@read -p "Are you sure you want to remove all images? (y/N): " confirm; \
	if [ "$$confirm" = "y" ]; then \
		echo "Removing all images..."; \
		docker rmi --force frontend backend mariadb blockchain; \
		echo "images removed."; \
	else \
		echo "Operation canceled."; \
	fi
	@read -p "Are you sure you want to remove all docker contents? (y/N): " confirm; \
	if [ "$$confirm" = "y" ]; then \
		echo "Removing all data..."; \
		docker system prune --all --force; \
		echo "all docker data removed."; \
	else \
		echo "Operation canceled."; \
	fi
