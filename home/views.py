from django.shortcuts import render

def home_view(request):
    context = {
        'title': 'Kataros | Home',
        'description': 'Explore our interactive 3D map and discover the world around you.',
    }
    return render(request, 'home/home.html', context)