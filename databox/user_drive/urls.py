from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_home_drive, name='home_drive'),
    path('create-folder/', views.create_folder, name='create_folder'),
    path('upload-file/', views.upload_file, name='upload_file'),
    path('folder/<int:folder_id>', views.open_folder, name='current_folder'),
    path('trigger-view/', views.trigger_view, name='trigger_view'),
]