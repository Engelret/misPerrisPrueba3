from django.shortcuts import render

from django.http import HttpResponse

from .models import Persona, Rescatado


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
    return HttpResponse("run : "+run+" correo : "+correo+" nombre : "+nombre+" fechaNac : "+fechaNac+" telefono : "+telefono+" nombreUsuario : "+nombreUsuario+" contraseñaUsuario : "+contraseñaUsuario+" region : "+region+" comuna : "+region+" vivienda : "+region)

def login(request):
    return render(request,'login.html',{})