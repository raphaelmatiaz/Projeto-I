from typing import Any
from django import forms
from .models import Drive, Folder  
from django.contrib.auth.models import User


# class NewFolderForm(forms.ModelForm):

#     secret_value = forms.CharField(widget=forms.HiddenInput(), initial=None) #current user. Renamed to 'secret_value' to avoid name conficts with django

#     def __init__(self,data,user, *args, **kwargs):
#         super().__init__(data=data,*args, **kwargs)

#         # Access the logged-in user if the form is used in a view
#         if user.is_authenticated:
#             self.initial['secret_value'] = user.id

#     def save(self, commit: bool = ...):
#         drive=Drive.objects.get(user__pk=self.cleaned_data['secret_value'])
#         self.cleaned_data['drive'] = drive
#         return super().save(commit) 

#     class Meta:
#         model = Folder
#         fields = ['name','drive']

class New_Folder_Form(forms.ModelForm):
    class Meta:
        model = Folder
        fields = ['name', 'parent', 'drive']

