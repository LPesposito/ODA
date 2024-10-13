

from django.shortcuts import render


def test_template(request):
    return render(request, "test/template.html")