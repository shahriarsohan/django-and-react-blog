from rest_framework import serializers

from conact.models import Contact


class ContactSerializers(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = [
            'name',
            'email',
            'message'
        ]
