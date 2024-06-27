install:
	docker-compose up --build

start:
	docker-compose up

stop:
	docker-compose down


super-user: 
	docker-compose run --rm python manage.py createsuperuser 

setup: install 

	docker-compose run python manage.py makemigrations
	docker-compose run --rm python manage.py createsuperuser 
	docker-compose run --rm python manage.py runserver


