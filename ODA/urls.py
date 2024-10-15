# Urls do app ODA
from django.urls import path
from ODA import views

urlpatterns = [
    path("", views.home, name="home"),
    path("atividades/lab", views.ativ_lab, name="virtual_lab"),
    path("atividades", views.atividades, name="atividades"),
    path("teste", views.test_template, name="teste"),
]
