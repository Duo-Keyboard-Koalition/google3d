from django.shortcuts import render
from django.http import HttpResponse

def aboutus(request):
    # return HttpResponse("Hello, world. You're at the map_forms index.")
    return render(request,'aboutus.html')
# Create your views here.
