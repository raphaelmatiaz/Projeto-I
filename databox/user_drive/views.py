from django.shortcuts import render, redirect, get_object_or_404
from .forms import New_Folder_Form, FileForm
from .models import Folder, File, Drive
from django.urls.base import reverse
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required


# LOAD THE USER DRIVE UI
def show_base_drive(request):

    # # Verificar se user é 'Anonymous User'
    # user = get_user_model
    # if not request.user.is_authenticated:
    # # User is anonymous
    #     return redirect(request, 'landing__page')
    
    # else:
        user = request.user

        # Verificar se é 'Staff User'. Se for: Get outta here staff user!
        if user.is_staff:
            return redirect('admin:login')
    
        else:
            user = request.user
            folders = user.drive.folder_set.all()
            files = user.drive.file_set.all()
            
            print(f"{user}'s Folders: {folders}")
            form = FileForm()
            context = {'folders': folders, 'form': form, 'files': files}
            print(f"Context: {context}")
            return render(request,'base_drive.html', context)

# # Create a new Folder (VERSAO ANTIGA)
# def create_folder(request):
   
#     if request.method == 'POST':
#         print("request method is POST")
#         form = NewFolderForm(request.POST, user=request.user)
#         print(f"Request object is {request}")
#         if form.is_valid():
#             print("form is VALID")
#             print(f"Form object is {form}")
#             # folder = Folder(name=request.POST['name'])
#             form.save()
#             return redirect('base__drive')  
#     else:
#         form = NewFolderForm()

#     context = {'form': form}
#     return render(request, 'base_drive.html', context)

# CREATE A NEW FOLDER
def create_folder(request):
    print('create_folder called')
    if request.method == 'POST':
        print('Request method is POST')
        user = request.user  # Get the currently logged-in user
        print(f"Current user is {user}")
        user_drive = user.drive  # Access the associated Drive instance
        print(f"{user}'s Drive is {user_drive}")
        form = New_Folder_Form(request.POST,)  # Pass the user's Drive
        print("Form Created")
        print(f"Form: {form}")

        if form.is_valid():
            print('Form is Valid')
            folder = form.save(commit=False)  # Create the Folder instance without saving yet
            print('Created Folder instance without saving yet')
            folder.drive = user_drive  # Explicitly assign the user's Drive
            print('Explicitly assign user Drive')
            folder.save()  # Save the Folder instance
    else:
        form = New_Folder_Form()  # Create an empty form for GET requests
        # context = {'form': form, 'message': 'Folder created successfully!'}  # Example context

    return redirect('base__drive')


# LIST FOLDERS IN CURRENT USER'S DRIVE
def list_user_folders(request):
    user = request.user
    folders = user.drive.folder_set.all()
    context = {'folders': folders}
    return render(request, 'base_drive.html', context)

# HANDLE FILE UPLOAD
@login_required
def upload_file(request):
    user = request.user
    drive: Drive | None = Drive.objects.filter(
        user=user,
    ).first() # ir buscar a drive do user que fêz o request

    if not drive:
        raise ValueError("Drive nao encontrado")
    form = FileForm()

    if request.method == 'POST':
        form = FileForm(request.POST, request.FILES)
        if form.is_valid():
            new_file = form.save(commit=False)  # Don't save immediately
            new_file.drive = drive  # Assign the Drive instance
            new_file.name = new_file.file.name
            new_file.save()  # Now save the File model with Drive association
            return redirect('base__drive')  # Replace 'success_url' with your success page URL
   

    context = {'form': form, 'drive': drive}
    return render(request, 'base_drive.html', context)

