from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.urls import reverse
from django.contrib.auth.forms import AuthenticationForm
from .forms import RegisterForm
from .forms import LoginForm
from user_drive.models import Drive


# Landing Page.
def show_landing_page(request):
    return render(request, 'landing_page.html')


# Register User
def show_register_user(request):

    if request.method == 'POST':
        form = RegisterForm(request.POST)

        if form.is_valid():
            user = form.save()
            login(request, user)
            Drive.objects.create(user=user)
            print("User created and logged in:", user)  # Debugging line
            return redirect('login')  # Redirect to a success page
        
        else:
            print("Form is not valid:", form.errors)  # Debugging line
            
    else:
        form = RegisterForm()
    
    return render(request, 'user_register.html', {'form': form})


# Login User
def show_login_user(request):

    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)

        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)

            if user is not None:

                if user.is_superuser or user.is_staff:
                    # Redirect to the admin login page
                    logout(request)
                    return redirect('/admin/login')
                
                else:
                    login(request, user)
                    return redirect('base__drive')
        else:
            print("Form is not valid:", form.errors)  # Debugging line
    else:
        form = LoginForm()
    
    return render(request, 'user_login.html', {'form': form})


