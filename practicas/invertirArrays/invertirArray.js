//almacene en un arreglo de tamaño N los numeros ingresados por el usuario
//la dimension N tambien es ingresada por el usuario
//muestre los numero del arreglo pero del ultimo al primero
// de 1,2,3  a   3,2,1
var readlineSync = require('readline-sync');
var arraySize = readlineSync.questionFloat('ingrese el tamanio de los arreglos ');
var i;
var array1 = new Array(arraySize);
var array2 = new Array(arraySize);
var array3 = new Array(arraySize);
for (i = 0; 4; i++) {
    var arrayNumber = readlineSync.questionFloat('ingrese numero a calcular ');
    array1[i] = arrayNumber;
}
;
