from django.conf.urls import url

from art_display import views

urlpatterns = [

    url(r'^$', views.ArtWorkList.as_view(), name='artwork_list'),

]
