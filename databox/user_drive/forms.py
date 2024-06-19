from django import forms
from .models import Folder  
from django.db import models

class NewFolderForm(forms.ModelForm):
    class Meta:
        model = Folder
        fields = ['name']
