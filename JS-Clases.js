//Función Constructor para crear más objetos de un mismo tipo------------------
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    //Método
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}
let padre = new Persona("Javier", "Ortiz", 46);
let madre = new Persona("Mabel", "Gomez", 43);
let hermana1 = new Persona("Azul", "Ortiz", 15);
let hermana2 = new Persona("Yanira", "Ortiz", 14);
let yo = new Persona("Facundo", "Ortiz", 19);

//Agrega una nueva propiedad a todos los objetos del mismo tipo con prototype--
Persona.prototype.celular;

//También se puede agregar un método con prototype-----------------------------
Persona.prototype.introduccion = function(){
    return "Hola, soy " + this.nombre + " " + this.apellido;
}

console.log(yo.introduccion());

//Object.create----------------------------------------------------------------
//Creo un objeto con un objeto vacío como proto
let obj = Object.create({});
//Creo un objeto a partir de un proto de Object
let obj1 = Object.create(Object.prototype);
//Que es lo mismo que crear un objeto vacío literal
let obj2 = {};

//Object.assign----------------------------------------------------------------
let obj3 = {};
//No hace falta guardar el resultado porque los objetos se pasan por referencia
Object.assign(obj3, {nombre: "Mabel", apellido: "Gomez"});
console.log(obj3.nombre);

//Herencia---------------------------------------------------------------------
function Alumno(nombre, apellido, edad, curso){
    Persona.call(this, nombre, apellido, edad);
    this.curso = curso;
}

let facu = new Alumno("Facundo", "Ortiz", 19, "Egresado");
