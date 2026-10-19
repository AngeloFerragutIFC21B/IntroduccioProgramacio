const prompt = require('prompt-sync')();

console.log("Hola!");

let primerNum = prompt("Diguem el primer nombre: ");
let segonNum  = prompt("Diguem el segon nombre: ");

primerNum = Number(primerNum);
segonNum = Number(segonNum);

let suma = primerNum + segonNum;
let resta = primerNum - segonNum;
let multi = primerNum * segonNum;
let divi = primerNum / segonNum;

console.log("Suma = " + suma);
console.log("Resta = " + resta);
console.log("Multiplicació = " + multi);
console.log("Divisió = " + divi);