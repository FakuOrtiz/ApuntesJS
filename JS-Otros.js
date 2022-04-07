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

