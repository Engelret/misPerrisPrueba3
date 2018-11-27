from django.shortcuts import render
from .models import Usuario


# Create your views here.

def index(request):
    return render(request,'index.html',{'nombre':"Engel",'elementos':["uno","dos","tres","cuatro"]})


def registroPersona(request):
    return render(request,'registroPersona.html',{})

def crearPersona(request):
    nombres = request.POST.get('nombres','')
    apellidos = request.POST.get('apellidos','')
    email = request.POST.get('email','')
    contrasenia = request.POST.get('contrasenia','')
    reContrasenia = request.POST.get('reContrasenia','')

    persona = Persona(nombres = nombres,apellidos = apellidos,email=email,contrasenia=contrasenia,reContrasenia=reContrasenia)
    persona.save()
    return HttpResponse("nombre : "+nombres+" apellidos : "+apellidos+" email : "+email+" contraseña : "+contrasenia+" reContraseña : "+reContrasenia)

def login(request):
    return render(request,'login.html',{})