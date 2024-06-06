from django.urls import path
from . import views  # Import views from within the same app

urlpatterns = [
    path('', views.landing_page_view),
]