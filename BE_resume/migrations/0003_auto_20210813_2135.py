# Generated by Django 3.2.6 on 2021-08-13 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BE_resume', '0002_auto_20210813_2123'),
    ]

    operations = [
        migrations.AlterField(
            model_name='work',
            name='company',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='work',
            name='content',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='work',
            name='location',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='work',
            name='techstack',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='work',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]
