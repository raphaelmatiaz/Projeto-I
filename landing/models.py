from django.db import models

# Create your models here.

class Test(models.Model):
    something = models.CharField(max_length=255)
    something2 = models.CharField(max_length=255)
    something3 = models.CharField(max_length=255)
    something4 = models.CharField(max_length=255)
