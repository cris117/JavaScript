"use strict";//directiva que indica que estamos trabajandoen modo estricto
/**
 * comentario de bloque
 

//Declaracion de variables o contenedores

var variable1 = 10; //caracter global
let variable2 = 23; // de ambito local
const costante1 = 3.14; //declarar costantes
 console.log(variable2);
 var variable1 = 0;

if (true){
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable1);
}

console.log(variable2);*/
//realizar un programa que lea 2 numeros y los sume e imprimir resultado

let num1;
let num2;
num1 = prompt("introdusca un numero");
num2 = prompt("introdusca otro numero");
let suma = 0;
suma = parseFloat(num1) + parseFloat(num2);
console.log("su resultado de la suma es: "+suma);
alert("la suma es :"+suma);
