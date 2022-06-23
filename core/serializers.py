from rest_framework import serializers
from .models import Plants


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plants
        fields = '__all__'
