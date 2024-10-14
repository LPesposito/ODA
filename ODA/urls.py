# Urls do app ODA
from django.urls import path
from ODA import views

urlpatterns = [
    path("", views.home),
    path("atividades/lab", views.ativ_lab, name="Virtual Lab"), 
    path("atividades", views.atividades, name="atividades"),
]
