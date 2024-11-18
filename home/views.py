from django.shortcuts import render
from django.conf import settings
def home_view(request):
    context = {
        'title': 'Kataros | Home',
        'google_maps_api_key' : settings.GOOGLE_MAPS_API_KEY,
        'description': 'Explore our interactive 3D map and discover the world around you.',
    }
    return render(request, 'home/home.html', context)