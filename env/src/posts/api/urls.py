from django.urls import path

from .views import (
    ListView,
    PostDetailsApiView,
    CategoryListView
)

urlpatterns = [
    path('list', ListView.as_view()),
    path('details/<slug>', PostDetailsApiView.as_view()),
    path('category/list', CategoryListView.as_view())
]
