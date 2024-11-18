from django.urls import path
from .views import welcome_view

urlpatterns = [
    path('', welcome_view, name='socials_forms'),
]