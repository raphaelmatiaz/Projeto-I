from django import forms
from .models import Folder, File



class New_Folder_Form(forms.ModelForm):
    class Meta:
        model = Folder
        fields = ['name', 'parent', 'drive']


class FileForm(forms.ModelForm):
    class Meta:
        model = File
        fields = ['name', 'file']

