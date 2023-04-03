let readlineSync = require('readline-sync')
let nro1 = readlineSync.questionFloat('ingrese el 1er numero: ')
let nro2 = readlineSync.questionFloat('ingrese el 2do numero: ')
let nro3 = readlineSync.questionFloat('ingrese el 3er numero: ')

let mayor = nro1;

if (nro2 > mayor) {
    mayor = nro2;
}
if (nro3 > mayor) {
    mayor = nro3;
}
console.log("El numero mas grande ingresado es: " + mayor);