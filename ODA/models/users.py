from django.db import models


class Users(models.Model):
    id = models.UUIDField(primary_key=True, auto_created=True)
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
