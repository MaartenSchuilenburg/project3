# Generated by Django 2.2.5 on 2019-09-27 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0007_auto_20190924_1201'),
    ]

    operations = [
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField()),
                ('item', models.CharField(max_length=100)),
                ('price_item', models.IntegerField()),
                ('total_price', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='ShoppingCart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField()),
                ('item', models.CharField(max_length=100)),
                ('price_item', models.IntegerField()),
                ('total_price', models.FloatField()),
            ],
        ),
    ]
