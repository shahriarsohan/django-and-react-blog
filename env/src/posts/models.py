import os
import random
from django.conf import settings
from django.db import models
from django.utils import timezone

from tinymce import HTMLField


def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext


def upload_image_path(instance, filename):
    new_filename = random.randint(12, 6556546321685413)
    name, ext = get_filename_ext(filename)
    final_filename = '{new_filename}{ext}'.format(
        new_filename=new_filename,
        ext=ext
    )
    return "posts/{new_filename}/{final_filename}".format(
        new_filename=new_filename,
        final_filename=final_filename
    )


User = settings.AUTH_USER_MODEL


class Category(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField()

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Posts(models.Model):
    title = models.CharField(max_length=250)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    overview = models.TextField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = HTMLField()
    slug = models.SlugField(unique=True, blank=True)
    published = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to=upload_image_path)

    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posts"

    def __str__(self):
        return self.title
