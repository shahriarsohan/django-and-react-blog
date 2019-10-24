from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('tinymce/', include('tinymce.urls')),

    # api
    path('api/v1/posts/', include("posts.api.urls"))
]
