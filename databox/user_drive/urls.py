from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_base_drive, name='base__drive'),
    path('create-folder/', views.create_folder, name='create_folder'),
]