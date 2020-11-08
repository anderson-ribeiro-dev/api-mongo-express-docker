include .env

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

up:
	docker-compose down

logs:
	docker-compose logs -f