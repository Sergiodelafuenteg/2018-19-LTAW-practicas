# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from .models import Bicicleta
# Create your views here.


def home_view(request):
    bicicleta = Bicicleta.objects.all()
    x = 'jojo'
    return render(request, "index.html", {'bicicleta': bicicleta}, {'x': x})


def list(request):
    objects = Bicicleta.objects.all()
    html = "<p>Listado de articulos</p>"
    for elt in objects:
        print(elt.name)
        html += '<p>' + elt.name + ' ' + str(elt.price) + '<p>'
    return HttpResponse(html)
