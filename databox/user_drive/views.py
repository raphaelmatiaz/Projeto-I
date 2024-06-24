from django.shortcuts import render, redirect, get_object_or_404
from .forms import New_Folder_Form, FileForm
from .models import Folder, File, Drive
from django.urls.base import reverse
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from typing import Optional


# LOAD THE USER DRIVE UI
@login_required(login_url='/')
def show_home_drive(request):

    user = request.user

    # Verificar se é 'Staff User'. Se for: Get outta here staff user!
    if user.is_staff:
        return redirect('admin:login')

    else:
        user = request.user
        folders = user.drive.folders.filter(parent=None).all()
        files = user.drive.files.all()
        
        print(f"{user}'s Folders: {folders}")
        form = FileForm()
        context = {'folders': folders, 'form': form, 'files': files}
        print(f"Context: {context}")
        print(f"Context is: {context}")
        return render(request,'home_drive.html', context)



# CREATE A NEW FOLDER
@login_required(login_url='/')
def create_folder(request):
    print('create_folder called')
    if request.method == 'POST':
        print('Request method is POST')
        current_folder_id = request.resolver_match.kwargs.get('folder_id')  # Assuming your URL captures the folder ID
        print(f"Current folder ID is: {current_folder_id}")

        # PARENT FOLDER SCENARIO
        if current_folder_id:
            
            user = request.user  # Get the currently logged-in user
            print(f"Current user is {user}")
            # user_drive = user.drive  # Access the associated Drive instance
            print(f"{user}'s Drive is {user_drive}")
            form = New_Folder_Form(request.POST, current_folder_id)  
            print("Form Created")
            print(f"Form: {form}")

            if form.is_valid():
                print('Form is Valid')
                folder = form.save(commit=False)  # Create the Folder instance without saving yet
                print('Created Folder instance without saving yet')
                form.drive=user.drive
                form.parent=Folder.objects.get(id=current_folder_id)
                print('Explicitly assign user Drive')
                form.save()  # Save the Folder instance

                return redirect('current_folder')
            
        # DRIVE SCENARIO
        else:
            user = request.user
            user_drive = user.drive
            form = New_Folder_Form(request.POST)

            if form.is_valid():
                print('Form is Valid')
                folder = form.save(commit=False)  # Create the Folder instance without saving yet
                print('Created Folder instance without saving yet')
                folder.drive = user_drive  # Explicitly assign the user's Drive
                print('Explicitly assign user Drive')
                folder.save()  # Save the Folder instance

                return redirect('home_drive')

    else:
        form = New_Folder_Form()  # Create an empty form for GET requests
        # context = {'form': form, 'message': 'Folder created successfully!'}  # Example context

    return redirect('home_drive')


# LIST FOLDERS IN CURRENT USER'S DRIVE
@login_required(login_url='/')
def list_user_folders(request):
    user = request.user
    folders = user.drive.folder_set.all()
    context = {'folders': folders}
    return render(request, 'home_drive.html', context)

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
            return redirect('home_drive')  # Replace 'success_url' with your success page URL
   

    context = {'form': form, 'drive': drive}
    return render(request, 'base_drive.html', context)


#CURRENT FOLDER. (sends context 'parent_folder' as current folder ID to template)
def open_folder(request, folder_id):

    
    # nested_folders = []
    form = FileForm()
    user = request.user
    # all_folders = Folder.objects.filter(drive=user.drive, parent=folder_id).all()
    all_folders = user.drive.folders.filter(parent=folder_id).all()
    # all_files = File.objects.filter(folder__pk=folder_id).all()
    all_files = user.drive.files.filter(folder__pk=folder_id).all()
    print(f"Folder id is:{folder_id}")
    print(f"Files are:{all_files}")
    # print(f"All folders")
    # for folder in all_folders:

    #     if folder.id == folder_id:

    #         nested_folders.append(folder)

    # current_folder = folder_id 
    # target_folder = Folder.objects.get(pk=folder_id)
    # # subfolders = target_folder.subfolders.all()
    # print(f"subfolders from {target_folder.name} are {nested_folders}")
    context = {'form': form, 'parent_folder': folder_id,'folders': all_folders, 'files': all_files}
    return render(request, 'current_folder.html', context)


def trigger_view(request):
    # This view can later process data sent from the component
    return HttpResponse('View Triggered!')