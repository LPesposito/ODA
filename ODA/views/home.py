# views principais
from django.shortcuts import render


def home(request):
    return render(request, "home.html")


def test_template(request):
    return render(request, "test/test.html", context={"lista": [1, 2, 3, 4, 5]})
