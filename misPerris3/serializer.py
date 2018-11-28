from rest_framework import serializers
<<<<<<< HEAD
from .models import Persona, Mascota
=======
from .models import Persona
from .models import Rescatado
>>>>>>> master


class PersonaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Persona
        fields = ('url','run','correo','nombre','fechaNac','telefono','nombreUsuario','contraseñaUsuario','region','comuna','vivienda') 
    
class RescatadoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
<<<<<<< HEAD
        model = Mascota
        fields = ('url','nombre')
=======
        model = Rescatado
        fields = ('url','nombre','raza','foto','descripcion','estado') 









    
>>>>>>> master
