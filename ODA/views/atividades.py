# views das atividades
from django.shortcuts import render


def atividades(request):
    return render(request, "atividades.html")


def ativ_lab(request):
    return render(request, "laboratorio.html")
