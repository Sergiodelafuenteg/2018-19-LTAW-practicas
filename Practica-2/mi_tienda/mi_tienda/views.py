
from django.http import HttpResponse
from django.shortcuts import render

def mi_function(request):
    html = "Hola"
    return HttpResponse(html)

def index(request):
    return render(request, 'index.html')