from django.shortcuts import render


def test_template(request):
    return render(request, "test/test.html", context={"lista": [1, 2, 3, 4, 5]})
