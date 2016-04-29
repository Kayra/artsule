from django.views.generic import ListView
from art_display.models import ArtWork


class ArtWorkList(ListView):
    queryset = ArtWork.objects.all()
    context_object_name = 'artwork_list'
    template_name = 'artwork_list.html'
