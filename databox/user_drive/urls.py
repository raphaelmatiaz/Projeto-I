from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_base_drive, name='base__drive'),
]