from django.shortcuts import render

# Create your views here.
def home_plotly(request):
    my_dict = {'insert_me':"Hello I am from views.py!"}
    return render(request,'home/charts.html',context=my_dict)