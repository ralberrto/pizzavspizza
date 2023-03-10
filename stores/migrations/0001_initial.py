# Generated by Django 4.0.9 on 2023-02-05 03:59

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pizzeria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('street', models.CharField(blank=True, max_length=400)),
                ('city', models.CharField(blank=True, max_length=400)),
                ('state', models.CharField(blank=True, max_length=2, null=True)),
                ('zip_code', models.IntegerField(blank=True, default=0)),
                ('website', models.URLField(blank=True, max_length=420)),
                ('phone_number', models.CharField(blank=True, max_length=10, validators=[django.core.validators.RegexValidator(regex='^\\1?\\d{9,10}$')])),
                ('description', models.TextField(blank=True)),
                ('logo_image', models.ImageField(blank=True, default='pizzeriaImages/pizzalogo.png', upload_to='pizzeriaImages')),
                ('email', models.EmailField(blank=True, max_length=245)),
                ('active', models.BooleanField(default=True)),
            ],
        ),
    ]
