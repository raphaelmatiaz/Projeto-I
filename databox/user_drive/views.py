from django.shortcuts import render, redirect
from .forms import NewFolderForm
from .models import Folder, File, Drive


# Create your views here.
def show_base_drive(request):
    user=request.user
     # get outta here staff user!
    if user.is_staff:
        return redirect('admin:login')
    else:
        folders = Drive.objects.filter(user=request.user).prefetch_related('folders')
        return render(request, 'base_drive.html', context={'folders': folders})

# Create a new Folder
def create_folder(request):
   
    if request.method == 'POST':
        print("request method is POST")
        form = NewFolderForm(request.POST)
        print(f"Request object is {request}")
        if form.is_valid():
            print("form is VALID")
            print(f"Form object is {form}")
            folder = Folder(name=request.POST['name'])
            folder.save()  
            return redirect('base__drive')  
    else:
        form = NewFolderForm()

    context = {'form': form}
    return render(request, 'base_drive.html', context)