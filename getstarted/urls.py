from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_get_started_page, name='get_started')
]