from django.db import models


class ArtWork(models.Model):

    name = models.CharField(max_length=255)
    description = models.TextField()
    imageFile = models.ImageField()

    def __str__(self):
        return self.name
