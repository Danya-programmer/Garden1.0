from django.db import models


class Plants(models.Model):
    title = models.CharField(max_length=60)
    content = models.CharField(max_length=120)
    image = models.ImageField(upload_to='images/', blank=True)
    price = models.CharField(max_length=10, blank=True)

    def __str__(self):
        return self.title
# Create your models here.
