# Generated by Django 4.0.3 on 2023-01-24 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_alter_appointment_vin'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='date',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='time',
        ),
        migrations.AddField(
            model_name='appointment',
            name='date_time',
            field=models.DateTimeField(null=True),
        ),
    ]
