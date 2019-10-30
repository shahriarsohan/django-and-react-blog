from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated,  IsAuthenticatedOrReadOnly

from posts.models import Posts, Category
from .serializers import (
    PostsSerilizers, CategorySerilizers
)


class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = CategorySerilizers


class ListView(ListAPIView):
    queryset = Posts.objects.filter(published=True)
    permission_classes = (IsAuthenticatedOrReadOnly, )
    serializer_class = PostsSerilizers


class PostDetailsApiView(RetrieveAPIView):
    queryset = Posts.objects.filter(published=True)
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = PostsSerilizers
    lookup_field = "slug"


class PostsByCategory(RetrieveAPIView):
    queryset = Posts.objects.filter(id=1)
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = PostsSerilizers
