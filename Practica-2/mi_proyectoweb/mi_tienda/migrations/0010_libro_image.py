# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2019-03-25 16:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0009_auto_20190310_2023'),
    ]

    operations = [
        migrations.AddField(
            model_name='libro',
            name='image',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
    ]
