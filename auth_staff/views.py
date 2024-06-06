from django.shortcuts import render

# Create your views here.
def show_register_staff(request):
    return render(request, 'register_staff.html')

def show_login_staff(request):
    return render(request, 'login_staff.html')