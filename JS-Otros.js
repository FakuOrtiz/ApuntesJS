//Declaración break y continue-------------------------------------------------
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i); //0, 1, 2, 3, 4
}
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i); //0, 1, 2, 3, 4, 6, 7, 8, 9
}



//Encontrar caracter en un String----------------------------------------------
let nombre = "Facundo";
let primerCaracter = nombre[0];
let ultimoCaracter = nombre[nombre.length-1];



//Operador ternario (if-else de una sola línea)---------------------------------
//condición ? código true : código false;
num1 = 10;
num2 = 5;
num1 > num2 ? `${num1} es mayor que ${num2}` : `${num2} es mayor que ${num1}`;



//Función flecha----------------------------------------------------------------
//En este caso no son necesarias las {} porque es de una sola línea
let array1 = [1, 2, 3]; 
let array2 = [4, 5, 6];
let concatenar = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenar(array1, array2));



//Expresiones Regulares---------------------------------------------------------
//Patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto.
let texto = "Hola me llamo Facu. HOLA ME LLAMO Facu";
let expReg = /hola/ig;
//Métodos para validar la expresión regular
console.log(expReg.test(texto));
console.log(expReg.exec(texto));
/**
Coincidencias Basicas
.       - Cualquier Caracter
\d      - Cualquier Digito (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - No es un Espacio, Tab o nueva linea.

Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

Cuantificadores
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Numero Exacto (Ej: /\d{3}/ busca 3 dígitos)
{3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro**/



//setTimeout() y setInterval()--------------------------------------------------
setTimeout(() => console.log("Hola"), 6000); //setTimeout(funcion, milisegs)
let interval = setInterval(() => console.log("Chau"), 2000); //setInterval(funcion, milisegs)
//Esto para que no corra infinitamente, se guarda el setInterval en una variable
setTimeout(() => clearInterval(interval), 5000);



//Closures----------------------------------------------------------------------
function saludar(saludo){
    return function(nombre){
        console.log(saludo + ' ' + nombre);
    }
}
let saludarHola = saludar('Hola'); // Esto devuelve una función
let saludarChau = saludar("Chau"); // Esto devuelve una función
saludarHola('Facu'); // Hola Facu
saludarChau("Facu"); // Chau Facu

function hacerSaludo(idioma) {
    if (idioma === "es") {
        return function(nombre){
            console.log("Hi, " + nombre + "!");
        }
    }
    if (idioma === "en") {
        return function(nombre) {
            console.log("Hola, " + nombre + "!");
        }
    }
}
let saludoEspaniol = hacerSaludo("es");
let saludoIngles = hacerSaludo("en");
saludoEspaniol("Facu");
saludoIngles("Facundo");


//Function.prototype.bind()-----------------------------------------------------
//crea una nueva función donde el 1er parámetro es donde quiero que apunte el this
let persona = {
    nombre: "Facundo",
    apellido: "Ortiz"
}
let logNombre = function() {
    console.log(this.nombre + " " + this.apellido);
}
let logNombrePersona = logNombre.bind(persona);
logNombrePersona();


let multiplicar = function(a, b) {
    console.log(a * b);
}
let multiplicarPorDos = multiplicar.bind(this, 2); //a = 2
multiplicarPorDos(3); //b = 3



//Function.prototype.call()-----------------------------------------------------
//Call hace lo mismo que Bind, solo que invoca la función, no devuelve una nueva.
logNombre.call(persona);
var logNombre2 = function(a, b){
    console.log(a +' '+ this.nombre + b);
}
logNombre2.call(persona, "Hola", ", cómo estas?");



//Function.prototype.apply()----------------------------------------------------
//Igual a call, solo que el segundo argumento es un arreglo.
logNombre2.apply(persona, ['Buenas', ', todo bien?']);