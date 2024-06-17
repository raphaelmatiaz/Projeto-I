from django.shortcuts import render, redirect
from .forms import NewFolderForm


# Create your views here.
def show_base_drive(request):
    return render(request, 'base_drive.html')

# Create a new Folder
def create_folder(request):
    if request.method == 'POST':
        form = NewFolderForm(request.POST)
        if form.is_valid():
            new_folder = form.save(commit=False)  # Don't save immediately
            # Optionally, set the parent_folder if applicable:
            # new_folder.parent_folder = some_existing_folder_instance

            new_folder.save()  # Save the instance to the database
            return redirect('base__drive')  # Redirect to success page
    else:
        form = NewFolderForm()

    context = {'form': form}
    return render(request, 'base__drive', context)