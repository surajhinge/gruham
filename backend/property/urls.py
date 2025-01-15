from django.urls import path
from .views import post_property

urlpatterns = [
    path('properties/', post_property, name='post_property'),
]