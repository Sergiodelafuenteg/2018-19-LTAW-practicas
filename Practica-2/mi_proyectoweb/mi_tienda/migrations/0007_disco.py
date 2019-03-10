# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2019-03-04 17:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0006_delete_disco'),
    ]

    operations = [
        migrations.CreateModel(
            name='Disco',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('author', models.CharField(max_length=200)),
                ('stock', models.IntegerField()),
                ('price', models.FloatField()),
            ],
        ),
    ]
