from django.db import models
from django.contrib.auth.models import User



# Create your models here.
class Drive(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    folders = models.ForeignKey('Folder', blank=True, null=True, related_name='DriveFolderChildren', default=None, on_delete=models.SET_DEFAULT)
    files = models.ForeignKey('File', blank=True, null=True, related_name='DriveFileChildren', default=None, on_delete=models.SET_DEFAULT)

    def __str__(self):
            return self.user

class Folder(models.Model):
    name = models.CharField(max_length=50, unique=True)  # Ensure unique folder names
    parent = models.ForeignKey('Folder', blank=True, null=True, related_name='FolderChildren', on_delete=models.CASCADE)

    def get_default_drive(self):
        # Logic to determine the default Drive for a new Folder based on self.user
        return Drive.objects.get_or_create(user=self.user)[0]

    drive_parent = models.ForeignKey('Drive', related_name='FolderDrive', on_delete=models.CASCADE, null=True, default=get_default_drive)

    def __str__(self):
        return self.name


class File(models.Model):
    name = models.CharField(max_length=50)
    file = models.FileField()
    parent = models.ForeignKey('Folder', blank=True, null=True, related_name='FileChildren', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
