from django.db import models

# Create your models here.

class Account(models.Model):

    REGULAR_ACCOUNT = 'R'
    STAFF_ACCOUNT = 'S'
    ACCOUNT_OPTIONS = [
        (REGULAR_ACCOUNT,'Regular Account'),
        (STAFF_ACCOUNT, 'Staff Account')
    ]

    type = models.CharField(max_length=1, choices=ACCOUNT_OPTIONS)
    name = models.CharField(max_length=255)
    password = models.