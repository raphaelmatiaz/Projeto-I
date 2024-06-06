from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.show_register_staff),
    path('login/', views.show_login_staff),
]