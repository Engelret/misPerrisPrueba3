$(function () {
    cargarRegion()
    cargarEstados()
    cargarVivienda()
})

function cargarRegion() {
    chile.regiones.forEach(region => {
        $("#region").append('<option value="' + region.region + '">' + region.region + '</option>')
    })
}

function cargarVivienda() {
    vivienda.forEach(vivienda => {
        $("#vivienda").append('<option value="'+vivienda+'">'+vivienda+'</option>')
    })
}

function cargarEstados(){
    estados.forEach(estado => {
        $("#estado").append('<option value="'+estado+'">'+estado+'</option>')
    })
}

$("#region").change(function () {
    var region = $(this).val()
    var regionCompleta = chile.regiones.find(r => r.region == region)
    $("#comuna").html("")
    $("#comuna").append('<option hidden ">Seleccione</option>')
    regionCompleta.comunas.forEach(comuna => {
        $("#comuna").append('<option value="' + comuna + '">' + comuna + '</option>')
    })

})

var estados = ["Rescatado", "Disponible", "Adoptado"]

var vivienda = ["Casa patio grande", "Casa patio pequeño", "Casa sin patio", "Departamento"]

var chile = {
    "regiones": [{
        "region": "Arica y Parinacota",
        "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
    {
        "region": "Tarapacá",
        "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
    {
        "region": "Antofagasta",
        "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
    {
        "region": "Atacama",
        "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
    {
        "region": "Coquimbo",
        "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
    {
        "region": "Valparaíso",
        "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    },
    {
        "region": "Región del Libertador Gral. Bernardo O’Higgins",
        "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
    },
    {
        "region": "Región del Maule",
        "comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
    },
    {
        "region": "Región de Ñuble",
        "comunas": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
    },
    {
        "region": "Región del Biobío",
        "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
    },
    {
        "region": "Región de la Araucanía",
        "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
    },
    {
        "region": "Región de Los Ríos",
        "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
    },
    {
        "region": "Región de Los Lagos",
        "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
    },
    {
        "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
        "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
    },
    {
        "region": "Región de Magallanes y de la Antártica Chilena",
        "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
    },
    {
        "region": "Región Metropolitana de Santiago",
        "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
    }]
    
}



$(document).ready(function(){
    $("#btnOso").popover({content:"Raza: boyero de Berna o boyero de montaña bernés <br> Descripcion: es un perro "+
     "muy popular actualmente ya que es un excelente perro familiar que además se desempeña muy"+
      "bien en algunas labores como la búsqueda y rescate y el apoyo en terapias para adultos y"+
      " niños. Es sin duda un perro excelente en muchos sentidos"
    , html:true})
})



$(document).ready(function(){
    $("#btnMaya").popover({content:"Raza: abrador retriever <br> Descripción: es una de las razas de perros más populares del mundo,"+
    "teniendo en cuenta la cantidad de ejemplares registrados.  Aunque "+
    "por lo general hablamos de un perro bondadoso, dócil y muy paciente, debemos saber que es"+
    " también un amigo incansable que va a necesitar largas horas de ejercicio y juegos para mantenerse en forma y evitar el sobrepeso,"+
    "un problema común en esta raza."
    , html:true})
})



$(document).ready(function(){
    $("#btnWifi").popover({content:"Raza: border collie <br> Descripción: es considerado el perro más inteligente del mundo, según Stanley Coren, el profesor e"+
    " investigador neuropsicológico del famoso libro La inteligencia de los perros, publicado en 1994."+
    " border collie es una raza canina que destaca por poseer una amplia capacidad de aprendizaje en distintos ámbitos: obediencia canina"+ 
    " básica, avanzada, habilidades caninas, pastoreo o Agility entre otros."
    , html:true})
})



$(document).ready(function(){
    $("#btnChocolate").popover({content:"Raza: pointer inglés <br> Descripción:  es, con diferencia, uno de los perros cazadores más conocidos, también llamado (pointer)"+
    ", simplemente. Se trata de un perro activo y dinámico, que se adaptará de maravilla si tiene a su lado un propietario activo y deportista, que le"+
    "ayude a sacar el máximo partido de sus cualidades."+" si te estás planteando adoptar un perro pointer inglés cachorro o adulto será muy"+
    " recomendable informarte previamente acerca de los cuidados que necesita, el adiestramiento que debe recibir o la alimentación a proporcionar, siempre en"+
    " relación a su nivel de actividad física. "
    , html:true})
})



$(document).ready(function(){
    $("#btnPexel").popover({content:"Raza: El yorkshire terrier <br> Descripción: no es solo uno de los perros más "+
    "pequeños del mundo, si no uno de los más acogidos por su tamaño y ternura. "+
    "Es una de las mascotas más populares.  Saber acerca de su alimentación, el tamaño que alcanzará de adulto o cómo llevar a cabo su"+
    "adiestramiento son algunas de las cosas básicas que debes tener claras antes de adoptar a uno, recuerda que un perro puede acompañarte muchos años y que"+
    " debes ser muy responsable a la hora de acogerlo."
    , html:true})
})



$(document).ready(function(){
    $("#btnBigotes").popover({content:"Raza: airedale terrier <br> Descripción: es un perro alegre, confiado, "+
    "valiente e inteligente. Suele ser amigable con la gente y también con otros perros, "+
    "pero necesita una buena socialización desde cachorro. Este perro es impulsivo y tiende a "+
    "presentar intensas conductas de presa. Por tanto, es necesario entrenarlo desde cachorro,"+
     "aunque siempre será preferible un adiestramiento sin maltratos ni intentos de dominación"
    , html:true})
})




$(document).ready(function(){
    $("#btnLuna").popover({content:"Raza:perro corso italiano <br> Descripción: es también conocido como cane corso o mastín "+
    "italiano y es sin duda, junto al mastín napolitano"+
    " una de las razas de perros molosos tipo dogo italianos más impactantes. Su nombre"+
    " deriva del latín (cohors) que significa (protector, guardián del corral)."
    , html:true})
})