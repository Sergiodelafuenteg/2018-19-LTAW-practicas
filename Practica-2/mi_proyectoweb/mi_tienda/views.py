# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from .models import Bicicleta
from .models import Disco
from .models import Libro
# Create your views here.


def home_view(request):
    x = 'gfgfgf'
    return render(request, "index.html", {'x': x})


def Discos_view(request):
    discos = Disco.objects.all()
    return render(request, "products.html", {'products': discos})


def Bicis_view(request):
    bicicletas = Bicicleta.objects.all()
    return render(request, "products.html", {'products': bicicletas})


def Libros_view(request):
    libros = Libro.objects.all()
    return render(request, "products.html", {'products': libros})


def list(request):
    objects = Bicicleta.objects.all()
    html = "<p>Listado de articulos</p>"
    for elt in objects:
        print(elt.name)
        html += '<p>' + elt.name + ' ' + str(elt.price) + '<p>'
    return HttpResponse(html)
