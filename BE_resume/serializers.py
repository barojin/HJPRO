from rest_framework import serializers
from .models import Profile, Work
"""
serializers to convert model instances to JSON so that React fetch data from Django
"""


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'name', 'email', 'address', 'intro', 'github', 'linkedin',)


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ('id', 'title', 'company', 'location', 'fromdate', 'todate', 'content', 'techstack', 'type',)
