from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Plot_Property
from .serializers import PropertySerializer

@api_view(['POST', 'GET'])
def post_property(request):
    if request.method == 'POST':
        serializer = PropertySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()   
            return Response({"message": "Property posted successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        properties = Plot_Property.objects.all()
        serializer = PropertySerializer(properties, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
