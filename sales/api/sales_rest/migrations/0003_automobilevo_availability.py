# Generated by Django 4.0.3 on 2023-01-24 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_automobilevo_import_href_alter_salerecord_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='availability',
            field=models.BooleanField(default=True),
        ),
    ]
