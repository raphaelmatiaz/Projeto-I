from django.shortcuts import render

# Create your views here.
def show_base_drive(request):
    return render(request, 'base_drive.html')
