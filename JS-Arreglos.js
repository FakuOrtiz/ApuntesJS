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

[3, 4, 5, 6].at(1); // 4
[3, 4, 5, 6].push(7); // [3, 4, 5, 6, 7]
[3, 4, 5, 6].pop(); // [3, 4, 5]
[3, 4, 5, 6].shift(); // [4, 5, 6]
[3, 4, 5, 6].unshift(1); // [1, 3, 4, 5, 6]
[3, 4, 5, 6].fill(1); // [1, 1, 1, 1]
[3, 4, 5, 6].join("-"); // "3-4-5-6"
[3, 4, 5, 6].reverse(); // [6, 5, 4, 3]
[3, 4, 5, 6].includes(5); // true
[3, 4, 5, 6].slice(0, 2); // [3, 4, 5]
[3, 4, 5, 6].map((num) => num + 6); // [9, 19, 11, 12]
[3, 4, 5, 6].find((num) => num > 4); // 5
[3, 4, 5, 6].some((num) => num > 5); // true
[3, 4, 5, 6].filter((num) => num > 4); // [5, 6]
[3, 4, 5, 6].every((num) => num > 5); // false
[3, 4, 5, 6].findIndex((num) => num > 4); // 2
[3, 4, 5, 6].reduce((acc, num) => acc + num); // 18