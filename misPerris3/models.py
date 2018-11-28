from django.db import models

# Create your models here.

class Persona(models.Model):
    run = models.CharField(max_length = 10)
    correo = models.CharField(max_length = 60)
    nombre = models.CharField(max_length = 100)
    fechaNac = models.CharField(max_length = 10)
    telefono = models.BigIntegerField()
    nombreUsuario = models.CharField(max_length = 40)
    contraseñaUsuario = models.CharField(max_length = 50)
    region = models.CharField(max_length = 60)
    comuna = models.CharField(max_length = 60)
    vivienda = models.CharField(max_length = 60)

    def __str__(self):
        return "persona"

class Rescatado(models.Model):
    nombre = models.CharField(max_length = 60)
    raza = models.CharField(max_length = 40)
    foto = models.ImageField(upload_to = 'fotos/')
    descripcion = models.CharField(max_length = 200)
    estado = models.CharField(max_length = 50)

    def __str__(self):
        return "rescatado"
