from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import RegisterForm

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
            print("User created and logged in:", user)  # Debugging line
            return redirect('base__drive')  # Redirect to a success page
        else:
            print("Form is not valid:", form.errors)  # Debugging line
    else:
        form = RegisterForm()
    
    return render(request, 'user_register.html', {'form': form})


# Login User
def show_login_user(request):
    return render(request, 'user_login.html')


