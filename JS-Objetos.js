//Declaración de objeto--------------------------------------------------------
let perro = {
    nombre: "Lola",
    apellido: "Ortiz",
    patas: 4,
    color: "blanco",
    //Método get
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    },
    //Método set
    get pelo(){
        return this.color;
    },
    set pelo(pelo){
        this.color = pelo;
    }
}

//Método get: podemos omitir los () al llamar la función-----------------------
console.log(perro.nombreCompleto);

//Método set: llamamos la función pelo(), esta settea la propiedad color-------
perro.pelo = "negro";
console.log(perro.color);
console.log(perro.pelo);

//Acceder a datos del objeto---------------------------------------------------
perro.nombre;
perro["nombre"]; 

//Actualizar propiedad del objeto----------------------------------------------
perro.nombre = "Lolita";
perro["nombre"] = "Lolita"; 

//Añadir propiedad al objeto---------------------------------------------------
perro.ladrido = "Guau-Guau";
perro["ladrido"] = "Guau-Guau";

//Eliminar propiedad del objeto------------------------------------------------
delete perro.ladrido;
delete perro["ladrido"];

//Verificar propiedad del objeto-----------------------------------------------
perro.hasOwnProperty("nombre"); //true

//Iterar objeto con for in-----------------------------------------------------
for (const key in perro) {
    console.log(key);
    console.log(perro[key]);
}

//Objetos anidados / complejos-------------------------------------------------
//Arreglo que contiene objetos-------------------------------------------------
let playlist = [
    {
        artista: "Queen",
        titulo: "Bohemian Rhapsody",
        formatos: ["CD", "Digital", "Vinilo"],
        anio: 1975
    },
    {
        artista: "Soda Stereo",
        titulo: "De música ligera",
        formatos: ["CD", "Digital"],
        anio: 1990
    }
];

//Acceder a arreglo de objetos anidados----------------------------------------
playlist[0].artista;
playlist[1].formatos[0];

//Objetos anidados (no arreglo que contiene objetos)---------------------------
let garage = {
    auto1: {
        color: "Rojo"
    },
    auto2: {
        color: "celeste"
    },
    autosInvitados: {
        auto1: {
            color: "azul"
        },
        auto2: {
            color: "blanco"
        }
    }
}

//Acceder a objetos anidados---------------------------------------------------
garage.autosInvitados.auto2.color;
garage["autosInvitados"]["auto2"]["color"];

//Método Call. Usa la función persona1.nombreCompleto con los datos de persona2
let persona1 = {
    nombre: "Facu",
    apellido: "Ortiz",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}
let persona2 = {
    nombre: "Agus",
    apellido: "Gomez"
}
persona1.nombreCompleto.call(persona2);

//Método Call con parámetros---------------------------------------------------
let persona3 = {
    nombre: "Facu",
    apellido: "Ortiz",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}
let persona4 = {
    nombre: "Agus",
    apellido: "Gomez"
}
persona3.nombreCompleto.call(persona4, "Técnico", "2613868279");

//Método Apply-----------------------------------------------------------------
//Diferencia con Call: los parámetros se pasan con un arreglo, no separados con coma
let arrayApply = ["Ingeniero", "2619430973"]
persona3.nombreCompleto.apply(persona4, arrayApply);