const prompt = require('prompt-sync')();

console.log("Hola!");
console.log("");

let numUsu = Number(prompt("Digues un numero dins el rang 1-100: "));

if (numUsu >= 1 && numUsu <= 100) {
    console.log("Número correcte");
} else {
    console.log("Número fora del rang.");
}