from django.shortcuts import render

# Create your views here.
def show_get_started_page(request):
    return render(request, 'get_started.html')