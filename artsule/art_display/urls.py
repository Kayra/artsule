from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static

from art_display import views

urlpatterns = [

    url(r'^$', views.ArtWorkList.as_view(), name='artwork_list'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
