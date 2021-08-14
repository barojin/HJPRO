from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProfileSerializer, WorkSerializer
from .models import Profile, Work
"""
viewsets: CRUD operation by default

"""


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


class ExperienceView(viewsets.ModelViewSet):
    serializer_class = WorkSerializer
    queryset = Work.objects.all()


class ProjectsView(viewsets.ModelViewSet):
    serializer_class = WorkSerializer
    queryset = Work.objects.all()