from django.shortcuts import render

from django.http import HttpResponse
from .models import Persona, Rescatado
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate, logout, login as auth_login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password
from django.shortcuts import redirect
#import de api 
from rest_framework import viewsets
from .serializer import PersonaSerializer, RescatadoSerializer


# Create your views here.

def index(request):
   return render(request, 'index.html', {'persona': Persona.objects.all()})

def listaPerros(request):
    return render(request, 'listaPerros.html', {'rescatado': Rescatado.objects.all()})

def registroPersona(request):
    return render(request, 'registroPersona.html',{'persona': Persona.objects.all()})

def crearPersona(request):
    run = request.POST.get('run','')
    correo = request.POST.get('correo','')
    nombre = request.POST.get('nombre','')
    fechaNac = request.POST.get('fechaNac','')
    telefono = request.POST.get('telefono','')
    nombreUsuario = request.POST.get('nombreUsuario','')
    contraseñaUsuario = request.POST.get('contraseñaUsuario','')
    region = request.POST.get('region','')
    comuna = request.POST.get('comuna','')
    vivienda = request.POST.get('vivienda','')

    persona = Persona(run=run ,correo=correo ,nombre=nombre ,fechaNac=fechaNac ,telefono=telefono ,nombreUsuario=nombreUsuario ,contraseñaUsuario=contraseñaUsuario ,region=region ,comuna=comuna ,vivienda=vivienda )
    persona.save()

    user = User.objects.create_user(nombreUsuario, correo, contraseñaUsuario)
    user.save()
    
    return redirect('index')


def registroMascota(request):
    return render(request,'registroMascota.html',{'rescatado': Rescatado.objects.all()})

def crearMascota(request):
    nombre = request.POST.get('nombre','')
    raza = request.POST.get('raza','')
    foto = request.FILES.get('foto','')
    descripcion = request.POST.get('descripcion','')
    estado = request.POST.get('estado','')

    rescatado = Rescatado(nombre = nombre, raza = raza, foto = foto, descripcion = descripcion, estado = estado )
    rescatado.save()
    
    return redirect('registroMascota')


def login(request):
    return render(request, 'login.html', {'usuarios': Persona.objects.all()})
    
def iniciar_sesion(request):
    username = request.POST.get('username', '')
    password = request.POST.get('passwordlogin', '')
    user = authenticate(request, username=username, password=password)

    if user is not None:
        auth_login(request, user)
        return redirect('index')
    else:
        return redirect('login')

def cerrar_sesion(request):
    logout(request)
    return redirect('index')


class PersonaViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer

class RescatadoViewSet(viewsets.ModelViewSet):
    queryset = Rescatado.objects.all()
    serializer_class = RescatadoSerializer

