//almacene en un arreglo de tamaño N los numeros ingresados por el usuario
//la dimension N tambien es ingresada por el usuario
//muestre los numero del arreglo pero del ultimo al primero
// de 1,2,3  a   3,2,1

let readlineSync = require('readline-sync');
let arraySize = readlineSync.questionFloat('ingrese el tamanio de los arreglos ');
let i: number;

let array1: number[] = new Array(arraySize);
let array2: number[] = new Array(arraySize);
let array3: number[] = new Array(arraySize);

for (i= 0; 4; i++) {
    let arrayNumber = readlineSync.questionFloat('ingrese numero a calcular ')
    array1[i] = arrayNumber;
};


