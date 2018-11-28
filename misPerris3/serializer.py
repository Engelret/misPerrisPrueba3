from rest_framework import serializers
from .models import Persona, Mascota


class PersonaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Persona
        fields = ('url','run','correo','nombre','fechaNac','telefono','nombreUsuario','contraseñaUsuario','region','comuna','vivienda') 
    
class MascotaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Mascota
        fields = ('url','nombre')