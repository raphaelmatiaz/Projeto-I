from django.shortcuts import render
# Create your views here.


def landing_page_view(request):
    return render(request, 'landing_page.html')