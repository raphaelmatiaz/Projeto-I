from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_landing_page),
    path('register-user/', views.show_register_user, name='register__user'),
    path('register-staff/', views.show_register_staff, name='register__staff'),
    path('login-user/', views.show_login_user, name='login__user'),
    path('login-staff/', views.show_login_user, name='login__staff'),
]