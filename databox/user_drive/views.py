from django.shortcuts import render, redirect
# from .forms import NewFolderForm
from .forms import New_Folder_Form
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


def create_folder(request):
    print('create_folder called')
    if request.method == 'POST':
        print('Request method is POST')
        user = request.user  # Get the currently logged-in user
        print(f"Current user is {user}")
        user_drive = user.drive  # Access the associated Drive instance
        print(f"{user}'s Drive is {user_drive}")
        form = New_Folder_Form(request.POST)  # Pass the user's Drive
        print("Form Created")
        print(f"Form: {form}")

        if form.is_valid():
            print('Form is Valid')
            folder = form.save(commit=False)  # Create the Folder instance without saving yet
            print('Created Folder instance without saving yey')
            folder.drive = user_drive  # Explicitly assign the user's Drive
            print('Explicitly assign user Drive')
            folder.save()  # Save the Folder instance

            return render(request,'base_drive.html', {'message': 'Folder created successfully!'})
    else:
        form = New_Folder_Form()  # Create an empty form for GET requests
        # context = {'form': form, 'message': 'Folder created successfully!'}  # Example context
    return render(request, 'base_drive.html') #, {'form': form}


# LIST FOLDERS IN CURRENT USER'S DRIVE
def list_user_folders(request):
    user = request.user
    folders = user.drive.folder_set.all()
    context = {'folders': folders}
    return render('list_folders.html', context)