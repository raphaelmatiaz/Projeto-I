from django.urls import path

from databox import settings
from . import views
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', views.show_home_drive, name='home_drive'),
    path('create-folder/', views.create_folder, name='create_folder'),
    path('upload-file/', views.upload_file, name='upload_file'),
    path('folder/<int:folder_id>', views.open_folder, name='current_folder'),
    path('logout/', views.logout_view, name='logout'),
    path('download/<int:file_id>/', views.download_file, name='download_file')
]