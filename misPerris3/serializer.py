from rest_framework import serializers
from .models import Persona
from .models import Rescatado


class PersonaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Persona
        fields = ('url','run','correo','nombre','fechaNac','telefono','nombreUsuario','contraseñaUsuario','region','comuna','vivienda') 
    
class RescatadoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Rescatado
        fields = ('url','nombre','raza','foto','descripcion','estado') 









    