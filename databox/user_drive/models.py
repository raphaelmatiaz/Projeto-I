from django.db import models

# Create your models here.

class Folder(models.Model):
    name = models.CharField(max_length=50)
    nestedFolder = models.ForeignKey('self', blank=True, related_name='children', on_delete=models.CASCADE)
			
			

class File(models.Model):
    name = models.CharField(max_length=50)
    folder = models.ForeignKey(Folder, on_delete=models.CASCADE)
    file = models.FileField()
