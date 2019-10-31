from django.urls import path
from .views import ConactAPIView

urlpatterns = [
    path('', ConactAPIView.as_view())
]
