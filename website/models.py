from django.db import models

# Create your models here.

class Acct(models.Model):

    name = models.CharField(max_length=50)
    level = models.CharField(max_length=30)
    rating = models.IntegerField()

    def __str__(self):
        return f"{self.name}"

class Dev(models.Model):

    name = models.CharField(max_length=50)
    level = models.CharField(max_length=30)
    rating = models.IntegerField()

    def __str__(self):
        return f"{self.name}"

class Cert(models.Model):

    TYPE_OPTIONS = (
        ('development', 'development'),
        ('analytics', 'analytics'),
        ('software', 'software'),
        ('automation', 'automation'),
        ('development analytics', 'development analytics'),
        ('development software', 'development software'),
        ('development automation', 'development automation'),
        ('analytics software', 'analytics software'),
        ('analytics automation', 'analytics automation'),
        ('software automation', 'software automation'),
        ('development analytics software', 'development analytics software'),
        ('development software automation', 'development software automation'),
        ('development automation analytics', 'development automation analytics'),
        ('automation analytics software', 'automation analytics software'),
        ('analytics software automation', 'analytics software automation'),
        ('development automation analytics software', 'development automation analytics software'),
    )

    title = models.CharField(max_length=100)
    class_name = models.CharField(
        max_length=100, choices=TYPE_OPTIONS, default='development')
    photo = models.ImageField(upload_to='cert/')

    def __str__(self):
        return self.title
