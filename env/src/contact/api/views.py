from rest_framework.generics import CreateAPIView

from contact.models import Contact
from .seriaizers import ContactSerializers


class ConactAPIView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
