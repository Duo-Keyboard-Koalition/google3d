from django.shortcuts import render
from django.conf import settings

def map_view(request):
    context = {
        'google_maps_api_key': settings.GOOGLE_MAPS_API_KEY,
    }
    return render(request, 'map_page/map_page.html', context)