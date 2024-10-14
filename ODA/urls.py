from django.urls import path
from django.contrib.auth import views as auth_views
from ODA import views

urlpatterns = [
    path("", views.home),
    path("atividade/lab", views.ativ_lab, name="Virtual Lab"),
    path("teste", views.test_template, name="Teste!"),
    path(
        "login/",
        auth_views.LoginView.as_view(template_name="login/login.html"),
        name="login",
    ),
    path(
        "logout/",
        auth_views.LogoutView.as_view(template_name="login/logout.html"),
        name="logout",
    ),
]
