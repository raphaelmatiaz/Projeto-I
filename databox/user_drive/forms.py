from django import forms
from .models import Folder, File



class New_Folder_Form(forms.ModelForm):
    class Meta:
        model = Folder
        fields = ['name', 'parent', 'drive']


#added 'parent'
class FileForm(forms.ModelForm):

    class Meta:
        model = File
        fields = ['file', 'folder', 'drive']
        widgets = {
            'file': forms.FileInput(attrs={'id': 'browse-files-button', 'class':'cenas'},
            )
        }

class DeleteFolderForm(forms.ModelForm):
    id = forms.CharField(widget=forms.HiddenInput)
    class Meta:
        model = Folder
        exclude = ['drive', 'name']
        
