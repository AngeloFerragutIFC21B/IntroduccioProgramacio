const prompt = require('prompt-sync')();

console.log("Hola!");
console.log("");

let edatUsu = Number(prompt("Quina es la teva edat?: "));
console.log("");
let carnet = prompt("Tens carnet d'estudiant?(si o no): ");
console.log("");

if (edatUsu < 18 || edatUsu > 65 || carnet == "si") {
    console.log("Tens descompte");
} else {
    console.log("Preu normal.");
}