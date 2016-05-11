from django.db import models


class ArtWork(models.Model):

    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    largeImage = models.ImageField()
    desktopImage = models.ImageField()
    mobileImage = models.ImageField()

    def __str__(self):
        return self.name
