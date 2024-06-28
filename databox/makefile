# install:
# 	docker-compose up --build

start:
	docker-compose up --build

stop:
	docker-compose down

migrations:


super-user: 
	docker-compose run --rm databox poetry run python manage.py createsuperuser 

setup:
	docker-compose run --rm databox poetry run python manage.py migrate
	docker-compose run --rm databox poetry run python manage.py createsuperuser --username admin --email admin@example.com
	docker-compose up --build
	


