# Generated by Django 2.1.2 on 2018-11-27 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('misPerris3', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='persona',
            name='nombreUsuario',
            field=models.CharField(max_length=40),
        ),
    ]
