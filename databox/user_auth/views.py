from django.shortcuts import render

# Landing Page.
def show_landing_page(request):
    return render(request, 'landing_page.html')

# Get Started
def show_get_started(request):
    return render(request, 'get_started.html')

# Register User
def show_register_user(request):
    return render(request, 'user_register.html')

# Register Staff
def show_register_staff(request):
    return render(request, 'staff_register.html')

# Login User
def show_login_user(request):
    return render(request, 'user_login.html')

# Login Staff
def show_login_staff(request):
    return render(request, 'staff_login.html')
