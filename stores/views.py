from django.shortcuts import render
from rest_framework import generics
from .models import Pizzeria
from .serializers import PizzeriaListSerializer


# Create your views here.
class PizzeriaListAPIView(generics.ListAPIView):
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaListSerializer
