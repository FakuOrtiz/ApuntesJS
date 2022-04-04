const { Console } = require("console");

//Declaración de arreglo-------------------------------------------------------
let array = ["Facu", 19];
let arrayAnidado = [["Facu", 19], ["Ortiz", 31]];

//Acceder a datos del arreglo--------------------------------------------------
array[0];

//Modificar datos del arreglo--------------------------------------------------
array[1] = "Ortiz";

//Acceder a datos del arreglo anidado------------------------------------------
arrayAnidado[1][0];

//PUSH - Añade dato al final---------------------------------------------------
array.push("Agustin");
//POP - Saca el dato del final y se lo da a la variable------------------------
let datoRemovido = array.pop();
//UNSHIFT - Añade dato al principio--------------------------------------------
array.unshift("Me llamo");
//SHIFT Saca el dato del principio y se lo da a la variable--------------------
let datoRemovido2 = array.shift();

//Iterar arreglo con bucle for-------------------------------------------------
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//Iterar arreglo anidado-------------------------------------------------------
for (let i = 0; i > arrayAnidado.length; i++) {
    for (let j = 0; j > arrayAnidado[i].length; j++){
        console.log(arrayAnidado[i][j]);
    }
}

//Callbacks--------------------------------------------------------------------
//Callback se llama una función que es pasada como parámetro a otra función----
function decirHolaAlUsuario(usuario) {
    return "Hola " + usuario;
}
function decirChauAlUsuario(usuario) {
    return "Chau " + usuario
}
function crearSaludo(usuario, cb) {
    return cb(usuario);
}

crearSaludo("Dan", decirHolaAlUsuario);
crearSaludo("Dan", decirChauAlUsuario);

//Iterar arreglo con forEach y Callback----------------------------------------
let alumnos = ["Lauti", "Santi", "Marcos", "Facu", "Willy", "Melga", "Octa", "Ema"];
//Sin callbacks
for (let i = 0; i < alumnos.length; i++){
    console.log(alumnos[i]);
}
//Con callbacks
alumnos.forEach(function(elemento, indice){
    console.log(elemento);
});
//El indice puede omitirse si no se quiere utilizar


//MÉTODOS DE ARREGLOS

let posts = [
    {
        id: 0,
        title: "Mi primer post",
        image: "https://image.com/0",
        tags: ["javascript", "webdevelopment"]
    },
    {
        id: 1,
        title: "Mi segundo post",
        image: "https://image.com/1",
        tags: ["javascript", "webdevelopment", "react"]
    },
    {
        id: 2,
        title: "Mi tercer post",
        image: "https://image.com/0",
        tags: ["javascript", "webdevelopment", "node"]
    },
];

//1- .find()-------------------------------------------------------------------
//Le pedimos que nos busque cada post donde su id sea == 1. DEVUELVE LA 1er COINCIDENCIA
console.log(posts.find(post => post.id == 1));

//2- .filter()-----------------------------------------------------------------
//Le pedimos que nos busque cada post donde su id sea == 1. DEVUELVE SIEMPRE UN ARRAY
console.log(posts.filter(post => post.id == 1));

//3- .some()-------------------------------------------------------------------
//¿Hay algún post donde el id sea == 2?
console.log(posts.some(post => post.id == 3));
console.log(posts.some(post => post.tags.includes("react")));

//4- .every()------------------------------------------------------------------
//¿En todos los posts, se incluye el tag "react"?
console.log(posts.every(post => post.tags.includes("react")));

//5- map()---------------------------------------------------------------------
//Devuelve un nuevo arreglo con los elementos que le pedimos 
console.log(posts.map(post => post.title));
//Multiplicar cada elemento del array por 2 con .map
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.map(num => num*2));

//6- .reduce()-----------------------------------------------------------------
//Devuelve un array con todas las tags utilizadas en los objetos
console.log(posts.reduce((acc, post) => {
    return [...acc, ...post.tags];
}, []));
//Suma todos los números de un array con .reduce
console.log(numeros.reduce((acc, num) => {
    return acc + num;
}));

//7- .slice()------------------------------------------------------------------
let array1 = [10, 20, 30, 40, 50, 60];
let subArr1 = array1.slice(0, 3);
console.log(subArr1);
let subArr2 = array1.slice(array1.length-1);
console.log(subArr2);
let subArr3 = array1.slice(3);
console.log(subArr3);

//8- .indexOf()----------------------------------------------------------------
console.log(array1.indexOf(50));

//9- .forEach()----------------------------------------------------------------
posts.forEach(post => {
    console.log(post.title);
});

//10- .findIndex()-------------------------------------------------------------
let a = posts.findIndex(i => {
    return i.title == "Mi tercer post";
});
console.log(a);