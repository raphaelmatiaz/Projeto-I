from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.show_register_user),
    path('login/', views.show_login_user)
]