# Generated by Django 4.0.3 on 2023-01-24 06:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_automobilevo_import_href'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='finished',
            field=models.BooleanField(default=False),
        ),
    ]
