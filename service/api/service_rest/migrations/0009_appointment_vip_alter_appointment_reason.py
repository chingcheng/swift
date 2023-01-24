# Generated by Django 4.0.3 on 2023-01-24 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0008_alter_appointment_vin'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='vip',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='reason',
            field=models.TextField(max_length=200),
        ),
    ]
