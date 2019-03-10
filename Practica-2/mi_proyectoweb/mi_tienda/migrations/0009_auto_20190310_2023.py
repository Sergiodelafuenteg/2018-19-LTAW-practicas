# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-03-10 20:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0008_disco_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='bicicleta',
            name='image',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='libro',
            name='author',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
    ]
