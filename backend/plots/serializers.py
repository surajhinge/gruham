from rest_framework import serializers
from .models import Plot_Property

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Plot_Property
        fields = ['title', 'description', 'price', 'location', 'image']
