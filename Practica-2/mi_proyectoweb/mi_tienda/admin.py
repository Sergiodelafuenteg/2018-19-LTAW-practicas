# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Bicicleta
from .models import Disco
from .models import Libro

# Register your models here.
admin.site.register(Bicicleta)
admin.site.register(Disco)
admin.site.register(Libro)
