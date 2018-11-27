from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse
from .models import Persona, Rescatado
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate, logout, login as auth_login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password


# Create your views here.

def index(request):
    return render(request,'index.html',{'nombre':"Engel",'elementos':["uno","dos","tres","cuatro"]})


def registroPersona(request):
    return render(request,'registroPersona.html',{'persona': Persona.objects.all()})

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

    user = User.objects.create_user(nombreUsuario, correo, repassword)
    user.save()
    
    return redirect('index')

def login(request):
    return render(request,'login.html',{'usuarios': Persona.objects.all()})

def iniciarSesion(request):
    nombreUsuario = request.POST.get('nombreUsuario', '')
    password = request.POST.get('passwordlogin', '')
    user = authenticate(request, nombreUsuario=nombreUsuario, password=password)

    if user is not None:
        auth_login(request, user)
        return redirect('index')
    else:
        return redirect('login')