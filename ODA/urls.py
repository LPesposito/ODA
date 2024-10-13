from django.urls import path
from ODA import views

urlpatterns = [
    path("", views.home),
    path("atividade/lab", views.ativ_lab, name="Virtual Lab"),
]
