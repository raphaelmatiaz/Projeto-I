from django.shortcuts import render

# Create your views here.
def show_register_user(request):
    return render(request, 'register_user.html')

def show_login_user(request):
    return render(request, 'login_user.html')