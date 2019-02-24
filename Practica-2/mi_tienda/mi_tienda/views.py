
from django.http import HttpResponse

def mi_function(request):
    html = "Hola"

    return HttpResponse(html)
