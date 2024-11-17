from django.shortcuts import render
from django.conf import settings

def map_view(request):
    print(request.body)
    context = {
        'center': '37.841157,-122.551679',  # Example coordinates
        'range': 2000,
        'tilt': 75,
        'heading': 330,
        'my_location': True,  # Default to False
        'google_maps_api_key': settings.GOOGLE_MAPS_API_KEY,
        'aria_label': 'Kataros Map',
    }
    return render(request, 'map_page/map_page.html', context)