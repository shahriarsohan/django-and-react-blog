from rest_framework import serializers

from posts.models import Category, Posts


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class PostsSerilizers(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()
    author = serializers.SerializerMethodField()

    class Meta:
        model = Posts
        fields = [
            'author',
            'overview',
            'category',
            'description',
            'title',
            'slug',
            'published',
            'featured',
            'timestamp',
            'image'
        ]

    def get_category(self, obj):
        return CategorySerilizers(obj.category).data

    def get_author(self, obj):
        return str(obj.author.username)


class CategorySerilizers(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = [
            'name',
            'slug',
        ]
