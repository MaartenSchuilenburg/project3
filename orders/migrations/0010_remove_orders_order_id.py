# Generated by Django 2.2.5 on 2019-09-27 13:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0009_auto_20190927_1433'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orders',
            name='order_id',
        ),
    ]