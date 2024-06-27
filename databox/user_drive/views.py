import mimetypes
import os
import zipfile
from django.shortcuts import render, redirect, get_object_or_404
from .forms import New_Folder_Form, FileForm
from .models import Folder, Drive, File
from django.urls.base import reverse
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.http import FileResponse, HttpResponse
from typing import Optional
from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


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
        form = FileForm()
        context = {'folders': folders, 'form': form, 'files': files}

        return render(request,'home_drive.html', context)



# CREATE A NEW FOLDER
@login_required(login_url='/')
def create_folder(request):
    if request.method == 'POST':
        current_folder_id = request.resolver_match.kwargs.get('folder_id')  


        # PARENT FOLDER SCENARIO
        if current_folder_id:
            
            user = request.user  
            

            
            form = New_Folder_Form(request.POST, current_folder_id)  
            
            if form.is_valid():
                
                folder = form.save(commit=False)  
                form.drive=user.drive
                form.parent=Folder.objects.get(id=current_folder_id)
                form.save()  

                return render(request, 'current_folder')
            
        # DRIVE SCENARIO
        else:
            user = request.user
            user_drive = user.drive
            form = New_Folder_Form(request.POST)

            if form.is_valid():
                print('Form is Valid')
                folder = form.save(commit=False)  
                print('Created Folder instance without saving yet')
                folder.drive = user_drive  
                print('Explicitly assign user Drive')
                folder.save()  

                return redirect('home_drive')

    else:
        form = New_Folder_Form()  

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
    drive: Drive | None = Drive.objects.filter(user=user,).first() 

    if not drive:
        raise ValueError("Drive nao encontrado")
    form = FileForm()

    if request.method == 'POST':
        form = FileForm(request.POST, request.FILES)
        if form.is_valid():
            new_file = form.save(commit=False)  
            new_file.drive = drive  
            new_file.name = new_file.file.name

            new_file.save()  
            return redirect('home_drive')  
   

    context = {'form': form, 'drive': drive}
    return render(request, 'base_drive.html', context)


#CURRENT FOLDER. (sends context 'parent_folder' as current folder ID to template)
@login_required
def open_folder(request, folder_id):

    # Vai buscar os parents do folder que corresponde a 'folder_id', subsequentemente, até o parent ser 'None'
    folder_chain = []
    folder = get_object_or_404(Folder, pk=folder_id)
    folder_chain.append(folder)

    while folder.parent:
        folder = folder.parent
        folder_chain.append(folder)

    # Inverter o array que contém a lista de parents 
    inverted_chain = folder_chain[::-1]

    form = FileForm()
    user = request.user
    all_folders = user.drive.folders.filter(parent=folder_id).all()
    all_files = user.drive.files.filter(folder__pk=folder_id).all()

    if not all_folders and not all_files:
        empty_folder = True
        context = {'form': form, 'parent_folder': folder_id,'folders': all_folders, 'files': all_files, 'folder_chain': inverted_chain, 'folder_is_empty': empty_folder}
        return render(request, 'current_folder.html', context)
    else:
    # print(f"Files are:{all_files} Folders are:{all_folders}")
        context = {'form': form, 'parent_folder': folder_id,'folders': all_folders, 'files': all_files, 'folder_chain': inverted_chain}
        return render(request, 'current_folder.html', context)


# ---------------------------------------------------------------

# LOGOUT
@login_required
def logout_view(request):
  logout(request)
  return redirect('login')

# DOWNLOAD FILE
@login_required
def download_file(request, file_id):

    file_obj = get_object_or_404(File, pk=file_id)

    with open(file_obj.file.path, 'rb') as f:
        file_data = f.read()

    content_type = 'application/octet-stream'  # Default content type

    response = HttpResponse(file_data, content_type=content_type)
    response['Content-Disposition'] = f'attachment; filename={file_obj.name}'
    
    return response
    


