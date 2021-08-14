from django.db import models
import datetime


# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    intro = models.TextField()
    github = models.CharField(max_length=200)
    linkedin = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Work(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200, null=True)
    location = models.CharField(max_length=200, null=True)
    fromdate = models.DateTimeField('start date', null=True)
    todate = models.DateTimeField('end date', null=True)
    content = models.TextField(null=True)
    techstack = models.CharField(max_length=200, null=True)
    type = models.CharField(max_length=200) # experience, project

    def __str__(self):
        return ', '.join([self.title, self.company])
