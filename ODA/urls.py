from django.urls import path
from ODA import views

urlpatterns = [
    path("", views.home),
]
