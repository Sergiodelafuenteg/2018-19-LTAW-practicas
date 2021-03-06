# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Bicicleta (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()
    image = models.CharField(max_length=200)

    def __str__(self):

        return self.name


class Disco (models.Model):
    name = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):

        return self.name

class Libro (models.Model):
    name = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):

        return self.name
