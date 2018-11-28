from rest_framework import serializers
from .models import Persona
from .models import Mascota


class PersonaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Persona
        fields = ('url','run','correo','nombre','fechaNac','telefono','nombreUsuario','contraseñaUsuario','region','comuna','vivienda') 
    class Meta:
        model = Mascota
        fields = ('url','nombre','raza','foto','descripcion','estado') 