const prompt = require('prompt-sync')();

console.log("Hola!");
console.log("");

let num1 = prompt("Diguem un nombre: ");
num1 = Number(num1);
console.log("");
let num2 = prompt("Diguem un altre nombre: ");
num2 = Number(num2);
console.log("");

let operació = prompt("Finalment, una operacio (+, -, *, /): ");
let resultat;

if (operació == "+") {
    resultat = (num1 + num2);
    console.log(resultat);
} else if (operació == "-") {
    resultat = (num1 - num2);
    console.log(resultat);
} else if (operació == "*") {
    resultat = (num1 * num2);
    console.log(resultat);
} else if (operació == "/") {
    if (num2 == 0) {
        console.log("No es pot dividir entre zero.");
    } else {
    resultat = (num1 / num2);
    console.log(resultat);
    }
    
} else {
    console.log("Operació no vàlida.")
}