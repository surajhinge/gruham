# Generated by Django 5.1.4 on 2025-01-15 15:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('property', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='property',
            old_name='title',
            new_name='BHK_type',
        ),
        migrations.RenameField(
            model_name='property',
            old_name='description',
            new_name='contact_details',
        ),
    ]
