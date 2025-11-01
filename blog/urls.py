from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("p/<slug:slug>/", views.post_detail, name="post_detail"),
]