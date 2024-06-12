from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_landing_page, name='landing__page'),
    path('register/', views.show_register_user, name='register'),
    path('login/', views.show_login_user, name='login'),
   
]