# Generated by Django 2.2.5 on 2019-09-24 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_auto_20190924_1159'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pizza',
            name='pizza_toppings',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2)], default=0),
        ),
    ]
