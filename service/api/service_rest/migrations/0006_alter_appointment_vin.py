# Generated by Django 4.0.3 on 2023-01-24 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_appointment_finished'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='vin',
            field=models.CharField(max_length=17, unique=True),
        ),
    ]
