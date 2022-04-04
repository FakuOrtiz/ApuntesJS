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
let array1 = [1, 2, 3]; let array2 = [4, 5, 6];
let concatenar = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenar(array1, array2));