from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'personas', views.PersonaViewSet)
router.register(r'mascotas', views.MascotaViewSet)


urlpatterns = [
    path('',views.index,name="index"),
    path('registroPersona/',views.registroPersona, name="registroPersona"),
    path('registroPersona/crearPersona/',views.crearPersona, name="crearPersona"),
    path('login/',views.login, name="login"),
    path('login/iniciar_sesion/', views.iniciar_sesion, name="iniciar_sesion"),
    path('login/cerrar_sesion/', views.cerrar_sesion, name="cerrar_sesion"),
    path('api/', include(router.urls)),
    path('listaPerros/',views.listaPerros, name="listaPerros"),
    path('registroMascota/',views.registroMascota, name="registroMascota"),
    path('registroMascota/crearMascota/',views.crearMascota, name="crearMascota"),
]