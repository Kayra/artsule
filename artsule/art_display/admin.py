from django.contrib import admin
from art_display.models import ArtWork

admin.register(ArtWork)(admin.ModelAdmin)
